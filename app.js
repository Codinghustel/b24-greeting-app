/*BX24.init(function(){
  console.log("Bitrix24 SDK ready");

  // Example test call — confirms the connection works
  BX24.callMethod('crm.type.list', {}, function(result){
    console.log(result.data());
  });
});*/



// app/route.js ya pages/api/index.js
export async function POST(request) {
  const formData = await request.formData();
  // Bitrix24 auth data process karen (AUTH_ID, DOMAIN, etc.)
  return new Response(htmlContent, {
    headers: { 'Content-Type': 'text/html' }
  });
}