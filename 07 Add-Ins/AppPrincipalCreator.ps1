if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$appDisplayName = "HighTrustCloudApp"
$clientID = "98675F22-931D-4CD6-ABD5-0659699090D9"

$targetWeb = Get-SPSite "http://sp2013c"
$authRealm = Get-SPAuthenticationRealm -ServiceContext $targetWeb

$AppIdentifier = $clientID + "@" + $authRealm

Write-Host "Creating the new app principal registration..."
Register-SPAppPrincipal -NameIdentifier $AppIdentifier -Site $targetWeb.RootWeb -DisplayName $appDisplayName