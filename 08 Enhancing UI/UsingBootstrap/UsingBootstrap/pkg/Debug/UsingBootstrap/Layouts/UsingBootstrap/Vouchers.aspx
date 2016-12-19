<%@ Assembly Name="UsingBootstrap, Version=1.0.0.0, Culture=neutral, PublicKeyToken=6c0f7a8b3763a747" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Vouchers.aspx.cs" Inherits="UsingBootstrap.Layouts.UsingBootstrap.Vouchers" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="usingbootstrap/lib/jquery-1.11.1.min.js" runat="server" Localizable="False"/>
    <SharePoint:ScriptLink ID="ScriptLink1" Name="usingbootstrap/lib/bootstrap.min.js" runat="server" Localizable="False"/>
    <SharePoint:ScriptLink ID="ScriptLink2" Name="usingbootstrap/vouchers.js" runat="server" Localizable="False"/>

    <link href="/_layouts/15/usingbootstrap/lib/bootstrap.css" rel="stylesheet"/>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
<div id="container">
    <div class="tab-content">
            <table class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Text</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody id="tblContactsBody">
                    </tbody>
            </table>
    </div>
<div class="col-md-12 text-center">
    <ul class="pagination pagination-lg pager" id="tblContactsPager"></ul>
</div>
    </div>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
Vouchers    
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
Vouchers
</asp:Content>
