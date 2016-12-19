///method: AddItem resource: SP.List
$.ajax( 
{
    'url':'restSource',
    'method':'POST',
    'data':JSON.stringify({
        'parameters':
        }),
    'headers':{
        'accept':'application/json;odata=verbose',
        'content-type':'application/json;odata=verbose',
        'X-RequestDigest':$('#__REQUESTDIGEST').val()
    },
    'success':function (data) { 
        var d = data; 
    },
    'error':function (err) { 
        alert(JSON.stringify(err)); 
    }
}
 );