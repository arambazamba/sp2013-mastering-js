if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$site = "http://sp2013c"
$appName = "HighTrustCloudApp"
$certPath = "D:\SharePoint 2013 MCSE Prep\05\Deploy\SPCertificate.cer"
$issuerId = [System.Guid]::NewGuid().ToString()

$web = Get-SPWeb $site
$siteRealm = Get-SPAuthenticationRealm –ServiceContext $web.Site
$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($certPath)
$fullAppId = $issuerId + '@' + $siteRealm 

New-SPTrustedRootAuthority -Name "SPCertificate" -Certificate $certificate 
$realm = Get-SPAuthenticationRealm

$specificIssuerId = "11D6BD97-F3C1-4172-9D17-8D07AA44AFD4"
$fullIssuerIdentifier = $specificIssuerId + '@' + $realm 

New-SPTrustedSecurityTokenIssuer -Name "SPCertificate" -Certificate $certificate -RegisteredIssuerName $fullIssuerIdentifier –IsTrustBroker
iisreset 

$serviceConfig = Get-SPSecurityTokenServiceConfig
$serviceConfig.AllowOAuthOverHttp = $true
$serviceConfig.Update()

#$secureTokenIssuer = New-SPTrustedSecurityTokenIssuer –Name $appName –Certificate $appCert –RegisteredIssuerName $fullAppId 
$appPrincipal = Register-SPAppPrincipal –NameIdentifier $fullAppId –Site $web –DisplayName $appName 
##$issuerId 