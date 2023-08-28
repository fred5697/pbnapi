#include <Inet.au3>

Local $sURL = "http://localhost:3000/api/calculate"
Local $sPostData = '{"num1": 1, "num2": 3}'

Local $sResponse = _INetPost($sURL, $sPostData)
MsgBox(0, "Response", $sResponse)
