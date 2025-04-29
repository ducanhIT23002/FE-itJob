const setCookie = (cname, cvalue, exdays) => {
  // Tạo một đối tượng Date hiện tại
  var d = new Date();

  // Cập nhật thời gian hết hạn của cookie (hiện tại + số ngày hết hạn * số milliseconds trong 1 ngày)
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

  // Tạo chuỗi thời gian hết hạn dưới dạng UTC (ví dụ: "expires=Wed, 01 May 2025 12:00:00 GMT")
  var expires = "expires=" + d.toUTCString();

  // Thiết lập cookie với tên, giá trị và ngày hết hạn
  document.cookie = cname + "=" + cvalue + "; " + expires;
};


const getCookie = (cname) => {
  // Tạo chuỗi để so sánh, ví dụ: "username="
  var name = cname + "=";

  // Lấy tất cả các cookie của trình duyệt và tách chúng ra bằng dấu chấm phẩy
  var ca = document.cookie.split(';');

  // Duyệt qua từng cookie
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    // Xoá khoảng trắng ở đầu (nếu có)
    while (c.charAt(0) ===' ') {
      c = c.substring(1);
    }

    // Nếu chuỗi cookie bắt đầu bằng tên cookie cần tìm
    if (c.indexOf(name) === 0) {
      // Trả về giá trị của cookie (từ sau dấu "=" đến hết)
      return c.substring(name.length, c.length);
    }
  }

  // Nếu không tìm thấy cookie thì trả về chuỗi rỗng
  return "";
};


 const deleteInfo = () => {
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "companyID=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

const cookieUtils = {
  setCookie,
  getCookie,
  deleteInfo,
};

export default cookieUtils;
