// const config = {
//   accessKey: 'F8BBA842ECF85',
//   secretKey: 'K951B6PE1waDMi640xX08PD3vg6EkVlz',
//   orderInfo: 'pay with MoMo',
//   partnerCode: 'MOMO',
//   redirectUrl: 'http://localhost:5000/views/home.html',
//   ipnUrl: 'https://2446-171-252-32-192.ngrok-free.app/api/payments/callback', //chú ý: cần dùng ngrok thì momo mới post đến url này được
//   requestType: 'payWithMethod',
//   extraData: '',
//   orderGroupId: '',
//   autoCapture: true,
//   lang: 'vi'
// };

const config = {
    vnp_TmnCode: "MH5H16SS",
    vnp_HashSecret: "50N61XYO1E1YOLSKZZREYV13SC2PWIF7",
    vnp_Url: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
    vnp_Api: "https://sandbox.vnpayment.vn/merchant_webapi/api/transaction",
    vnp_ReturnUrl: "https://marginally-informed-mullet.ngrok-free.app/api/payments/vnpay_return"
  };

export default config;
