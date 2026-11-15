/* ============================================================
   fields-data.js
   Nguồn: "TỔNG HỢP GÓP Ý.docx" – 5 lĩnh vực, 430 tình huống
   • Tuyển quân (NVQS)              : 70 mục  (đầy đủ theo file gốc)
   • Dự bị động viên                : 80 mục  (đầy đủ theo file gốc)
   • Dân quân tự vệ                 : 100 mục (5 mục đầu theo file gốc,
                                                 các mục còn lại gợi ý theo luật)
   • Giáo dục quốc phòng và an ninh : 80 mục  (khung gợi ý theo Luật 30/2013)
   • Chính sách và hậu phương QĐ    : 100 mục (khung gợi ý theo Pháp lệnh ưu đãi)
   Ghi chú: các nhóm có comment "GỢI Ý" cần đối chiếu lại với file gốc
            khi có bản đầy đủ để thay thế chính xác từng câu chữ.
   ============================================================ */

window.GOP_Y_FIELDS = {

  /* =========================================================
     1) TUYỂN QUÂN (NVQS) — 70 mục / 10 nhóm (theo file gốc)
     ========================================================= */
  'Tuyển quân (NVQS)': {
    '1. Đăng ký, quản lý nguồn công dân trong độ tuổi': [
      'Bỏ sót công dân thuộc diện đăng ký nghĩa vụ quân sự',
      'Đưa vào danh sách người không thuộc diện đăng ký',
      'Thông tin họ tên, ngày sinh, nơi cư trú, trình độ học vấn không đúng',
      'Không cập nhật biến động cư trú, chuyển đi, chuyển đến',
      'Không hướng dẫn thủ tục đăng ký lần đầu, đăng ký bổ sung hoặc chuyển đăng ký',
      'Có dấu hiệu cố ý loại người đủ điều kiện khỏi danh sách nguồn',
      'Không tiếp nhận tài liệu chứng minh tình trạng học tập, cư trú, lao động'
    ],
    '2. Rà soát, xét duyệt chính trị và tiêu chuẩn tuyển chọn': [
      'Đánh giá tiêu chuẩn chính trị thiếu căn cứ hoặc không thống nhất',
      'Không thông báo, giải thích kết quả xét duyệt theo phạm vi được phép',
      'Thông tin xác minh nhân thân không chính xác',
      'Áp dụng không thống nhất tiêu chuẩn tuyển chọn giữa các công dân',
      'Có dấu hiệu thiên vị, tác động trái quy định vào danh sách đủ điều kiện',
      'Lộ lọt thông tin cá nhân trong hồ sơ xét duyệt'
    ],
    '3. Lập danh sách, giấy gọi sơ tuyển và khám sức khỏe': [
      'Không nhận được giấy gọi hoặc nhận quá muộn',
      'Giấy gọi sai thông tin, thời gian, địa điểm',
      'Gọi khám người không thuộc diện phải khám hoặc bỏ sót người thuộc diện',
      'Không giải quyết, không hướng dẫn đề nghị đối lịch vì lý do chính đáng',
      'Việc giao nhận giấy gọi thiếu chứng cứ hoặc có dấu hiệu giả mạo',
      'Thông tin danh sách niêm yết không thống nhất với giấy gọi'
    ],
    '4. Sơ tuyển sức khỏe tại cấp xã': [
      'Đo chiều cao, cân nặng, vòng ngực hoặc tính BMI không chính xác',
      'Không ghi nhận bệnh lý, tiền sử bệnh, hồ sơ điều trị',
      'Thiếu bước kiểm tra theo quy trình sơ tuyển áp dụng',
      'Kết quả sơ tuyển khác với dữ liệu ghi trong phiếu',
      'Thái độ ứng xử không phù hợp khi sơ tuyển',
      'Không giải thích kết quả sơ tuyển, hướng dẫn bước tiếp theo'
    ],
    '5. Khám sức khỏe nghĩa vụ quân sự': [
      'Không đồng ý kết luận phân loại sức khỏe',
      'Kết quả đo thị lực, tật khúc xạ không chính xác',
      'Kết quả khám tai mũi họng, răng hàm mặt không phù hợp',
      'Kết quả khám nội khoa, ngoại khoa, da liễu không phản ánh bệnh lý',
      'Không xem xét bệnh án, kết quả xét nghiệm, giấy ra viện',
      'Có sai lệch giữa kết luận chuyên khoa và phiếu tổng hợp',
      'Nghi ngờ thiếu nội dung khám, xét nghiệm bắt buộc',
      'Không được hướng dẫn thủ tục đề nghị giám định sức khỏe',
      'Phát sinh bệnh, chấn thương sau lần khám nhưng chưa được xem xét',
      'Công khai trái phép bệnh án hoặc thông tin sức khỏe nhạy cảm'
    ],
    '6. Tạm hoãn, miễn gọi nhập ngũ': [
      'Không xem xét hồ sơ chứng minh đang học thuộc trường hợp luật định',
      'Không xem xét hoàn cảnh lao động duy nhất nuôi dưỡng thân nhân theo điều kiện luật định',
      'Không xem xét các trường hợp tạm hoãn khác theo quy định',
      'Không xem xét trường hợp miễn gọi nhập ngũ theo luật',
      'Hồ sơ hợp lệ nhưng không được tiếp nhận hoặc bị thất lạc',
      'Áp dụng không thống nhất điều kiện tạm hoãn, miễn giữa các công dân',
      'Danh sách, quyết định tạm hoãn hoặc miễn thiếu công khai theo quy định',
      'Không hướng dẫn khi điều kiện tạm hoãn đã chấm dứt'
    ],
    '7. Bình xét, công khai, chốt danh sách tuyển quân': [
      'Không công khai danh sách theo quy định',
      'Danh sách công khai và danh sách chốt có khác biệt không được giải thích',
      'Phản ánh bình xét thiếu khách quan, thiếu dân chủ',
      'Không tiếp nhận ý kiến của công dân, gia đình về danh sách',
      'Có dấu hiệu ưu tiên, loại trừ không đúng tiêu chuẩn',
      'Thay đổi danh sách sau khi chốt không đúng thẩm quyền, trình tự'
    ],
    '8. Lệnh gọi nhập ngũ và giao nhận quân': [
      'Lệnh gọi nhập ngũ sai thông tin hoặc giao không đúng thời hạn luật định',
      'Giao lệnh không đúng trình tự hoặc không có chứng cứ giao nhận',
      'Công dân đang có đề nghị giải quyết nhưng không được hướng dẫn quyền, nghĩa vụ',
      'Sai sót về thời gian, địa điểm tập trung giao quân',
      'Phản ánh việc xử lý trường hợp vắng mặt không khách quan',
      'Sai sót hồ sơ, giấy tờ, thông tin khi bàn giao công dân',
      'Phản ánh về bảo đảm quyền lợi, chế độ trong quá trình giao nhận quân'
    ],
    '9. Hành vi tiêu cực, nhũng nhiễu và vi phạm pháp luật': [
      'Gợi ý, đòi hỏi hoặc nhận tiền, quà để thay đổi kết quả tuyển quân',
      'Làm giả, sửa chữa, đánh tráo hồ sơ, giấy khám sức khỏe',
      'Can thiệp trái thẩm quyền vào kết quả xét duyệt hoặc khám',
      'Cố ý bỏ lọt người đủ điều kiện hoặc đưa người không đủ điều kiện vào danh sách',
      'Trù dập, đe dọa người phản ánh, tố cáo',
      'Tiết lộ danh tính người tố cáo trái quy định',
      'Lợi dụng tuyển quân để thu các khoản tiền không có căn cứ'
    ],
    '10. Tiếp công dân, xử lý đơn và bảo vệ dữ liệu': [
      'Không tiếp nhận, không cấp giấy biên nhận khi thuộc trường hợp phải thực hiện',
      'Chậm chuyển đơn hoặc chuyển sai cơ quan có thẩm quyền',
      'Không thông báo tiến độ, kết quả theo quy định',
      'Không phân biệt khiếu nại, tố cáo, kiến nghị, phản ánh',
      'Không bảo mật thông tin người tố cáo hoặc hồ sơ y tế',
      'Không xử lý đơn trùng lặp, nhiều người cùng phản ánh theo đúng quy trình',
      'Có hành vi cản trở công dân thực hiện quyền khiếu nại, tố cáo'
    ]
  },

  /* =========================================================
     2) DỰ BỊ ĐỘNG VIÊN — 80 mục / 12 nhóm (theo file gốc)
     ========================================================= */
  'Dự bị động viên': {
    '1. Đăng ký và quản lý quân nhân dự bị': [
      'Không được hướng dẫn đăng ký sau xuất ngũ',
      'Thông tin đăng ký không chính xác',
      'Chuyển nơi cư trú nhưng chưa điều chỉnh hồ sơ',
      'Đã đăng ký nhưng không có tên trong danh sách',
      'Đăng ký trùng tại hai địa phương',
      'Chưa được giải quyết thủ tục chuyển đăng ký',
      'Không thuộc diện đăng ký nhưng vẫn bị yêu cầu',
      'Đề nghị cập nhật, điều chỉnh hoặc xóa thông tin theo quy định'
    ],
    '2. Sắp xếp vào đơn vị dự bị động viên': [
      'Sắp xếp không phù hợp chuyên nghiệp quân sự',
      'Chức danh không phù hợp trình độ, năng lực',
      'Không đủ điều kiện nhưng vẫn được sắp xếp',
      'Không được thông báo về việc sắp xếp',
      'Sắp xếp trùng nhiệm vụ tại nhiều đơn vị',
      'Đề nghị thay đổi đơn vị do hoàn cảnh thực tế',
      'Phản ánh thiếu công bằng khi lựa chọn'
    ],
    '3. Khám sức khỏe quân nhân dự bị': [
      'Kết quả khám không phản ánh tình trạng sức khỏe',
      'Bệnh mãn tính chưa được xem xét',
      'Giấy xác nhận bệnh viện không được tiếp nhận',
      'Không đồng ý kết luận đủ sức khỏe',
      'Đề nghị khám lại khi sức khỏe thay đổi',
      'Quy trình khám chưa đầy đủ',
      'Không được giải thích kết luận sức khỏe'
    ],
    '4. Gọi tập trung huấn luyện, diễn tập, kiểm tra sẵn sàng động viên': [
      'Không nhận được lệnh gọi đúng quy định',
      'Thông tin trên lệnh gọi sai',
      'Thời gian thông báo gây khó khăn chuẩn bị',
      'Lý do chính đáng chưa được xem xét',
      'Gọi tập trung khi đang điều trị bệnh',
      'Đề nghị xem xét hoàn cảnh gia đình đặc biệt',
      'Thời gian huấn luyện thực tế khác thông báo',
      'Điều kiện sinh hoạt khi huấn luyện chưa bảo đảm',
      'Lựa chọn người tham gia thiếu công bằng'
    ],
    '5. Chế độ phụ cấp, tiền lương và trợ cấp': [
      'Chưa được chi trả phụ cấp',
      'Phụ cấp không đúng mức',
      'Chi trả trợ cấp chậm',
      'Không được giải thích các khoản được hưởng',
      'Tính sai số ngày trợ cấp',
      'Chưa thanh toán chế độ đi lại thuộc diện hưởng',
      'Cơ quan sử dụng lao động chưa thực hiện đúng chế độ',
      'Khấu trừ tiền không rõ căn cứ',
      'Đề nghị truy lĩnh khoản còn thiếu'
    ],
    '6. Quyền lợi việc làm và quan hệ lao động': [
      'Doanh nghiệp gây khó khăn khi thực hiện lệnh gọi',
      'Chấm dứt hợp đồng trái quy định do huấn luyện',
      'Không bảo đảm quyền lợi tiền lương',
      'Không bố trí lại công việc phù hợp sau nhiệm vụ',
      'Không xác nhận thời gian thực hiện nhiệm vụ',
      'Đề nghị giải quyết tranh chấp lao động'
    ],
    '7. Tai nạn, ốm đau và bảo hiểm': [
      'Tai nạn khi làm nhiệm vụ chưa được giải quyết chế độ',
      'Không được hướng dẫn hồ sơ tai nạn',
      'Chi phí khám chữa bệnh chưa giải quyết',
      'Chậm xác nhận hồ sơ tai nạn',
      'Không đồng ý kết quả xác định mức tổn thương',
      'Gia đình chưa được hướng dẫn chế độ khi bị thương hoặc tử vong',
      'Vướng mắc bảo hiểm trong thời gian tập trung'
    ],
    '8. Phương tiện kỹ thuật dự bị': [
      'Đăng ký phương tiện sai chủ sở hữu',
      'Thông số kỹ thuật phương tiện sai',
      'Lựa chọn phương tiện huy động thiếu công bằng',
      'Không đồng ý đánh giá tình trạng kỹ thuật',
      'Khiếu nại bồi thường thiệt hại phương tiện',
      'Chậm thanh toán chi phí huy động'
    ],
    '9. Xử lý vi phạm hành chính': [
      'Không đồng ý biên bản vi phạm',
      'Xử phạt không đúng hành vi',
      'Không đồng ý mức phạt',
      'Có lý do chính đáng nhưng vẫn lập biên bản',
      'Lập biên bản sai trình tự',
      'Đề nghị xem xét lại quyết định xử phạt'
    ],
    '10. Tố cáo sai phạm, tiêu cực': [
      'Làm sai lệch hồ sơ quân nhân dự bị',
      'Nhận tiền để loại người khỏi danh sách',
      'Chi trả thiếu hoặc chiếm dụng trợ cấp',
      'Lợi dụng chức vụ ưu tiên người quen',
      'Giả mạo chữ ký, giấy tờ',
      'Tiết lộ trái phép thông tin cần bảo vệ'
    ],
    '11. Công khai, minh bạch và tiếp nhận kiến nghị': [
      'Không được giải thích quyền và nghĩa vụ',
      'Đơn kiến nghị không được tiếp nhận hoặc hướng dẫn',
      'Chậm trả lời kiến nghị',
      'Không thông báo kết quả khi phải thông báo',
      'Sử dụng thông tin cá nhân sai mục đích'
    ],
    '12. Hoàn cảnh gia đình và kiến nghị khác': [
      'Gia đình đặc biệt khó khăn khi có lệnh tập trung',
      'Đang trực tiếp chăm sóc người thân bệnh nặng',
      'Thay đổi nơi làm việc, cư trú cần cập nhật',
      'Khó khăn phát sinh khi thực hiện nhiệm vụ'
    ]
  },

  /* =========================================================
     3) DÂN QUÂN TỰ VỆ — 100 mục / 10 nhóm
     5 mục đầu nhóm 1 theo file gốc; các mục còn lại (GỢI Ý)
     ========================================================= */
  'Dân quân tự vệ': {
    '1. Đăng ký, quản lý công dân trong độ tuổi': [
      'Không được hướng dẫn thủ tục đăng ký nghĩa vụ tham gia DQTV',
      'Thông tin họ tên, ngày sinh trong danh sách sai',
      'Ghi sai nơi cư trú hoặc đơn vị công tác',
      'Chưa cập nhật việc chuyển nơi cư trú',
      'Đăng ký trùng ở hai địa phương',
      'Không được cấp giấy chứng nhận đăng ký DQTV',
      'Bị đưa vào danh sách khi không thuộc diện đăng ký',
      'Không được điều chỉnh, xóa thông tin khi có đề nghị hợp lệ'
    ],
    '2. Tuyển chọn, công nhận hoàn thành nghĩa vụ DQTV': [
      'Không được thông báo tiêu chuẩn, điều kiện tuyển chọn',
      'Không được công nhận hoàn thành nghĩa vụ DQTV dù đủ điều kiện',
      'Không xem xét hồ sơ đề nghị tạm hoãn, miễn DQTV',
      'Không xử lý kịp thời khi công dân chuyển khỏi địa bàn',
      'Công nhận hoàn thành nghĩa vụ sai đối tượng',
      'Không thông báo quyết định công nhận hoàn thành',
      'Không cấp giấy xác nhận hoàn thành nghĩa vụ DQTV',
      'Tuyển chọn người không đủ tiêu chuẩn sức khỏe',
      'Không ưu tiên đúng đối tượng theo luật (nữ, dân tộc ít người)',
      'Có dấu hiệu thiên vị trong tuyển chọn'
    ],
    '3. Tổ chức, chức vụ và phụ cấp chức vụ': [
      'Bổ nhiệm chức vụ không đúng thẩm quyền',
      'Miễn nhiệm chức vụ chưa đúng trình tự',
      'Không được giao nhiệm vụ phù hợp với chức vụ',
      'Phụ cấp chức vụ chưa được chi trả',
      'Phụ cấp chức vụ chi sai mức',
      'Không được hưởng phụ cấp khi kiêm nhiệm',
      'Chậm chi trả phụ cấp chức vụ',
      'Bố trí chức vụ không phù hợp năng lực',
      'Không được thông báo quyết định bổ nhiệm',
      'Không xem xét nguyện vọng khi thay đổi chức vụ'
    ],
    '4. Huấn luyện, giáo dục chính trị': [
      'Không nhận được kế hoạch huấn luyện đúng thời hạn',
      'Thời gian huấn luyện vượt quá quy định',
      'Nội dung huấn luyện không đúng chương trình',
      'Không được cấp phát quân trang, trang bị đầy đủ',
      'Điều kiện sinh hoạt trong huấn luyện chưa bảo đảm',
      'Không được bảo đảm an toàn trong huấn luyện',
      'Đánh giá kết quả huấn luyện thiếu công bằng',
      'Không được xác nhận thời gian tham gia huấn luyện',
      'Xin vắng/hoãn huấn luyện không được giải quyết',
      'Tổ chức huấn luyện vào thời điểm không phù hợp',
      'Không được hướng dẫn chế độ khi ốm đau trong huấn luyện',
      'Lựa chọn người tham gia khóa huấn luyện thiếu công khai'
    ],
    '5. Điều động, huy động thực hiện nhiệm vụ': [
      'Lệnh điều động không đúng thẩm quyền',
      'Lệnh điều động sai thông tin',
      'Không được thông báo trước theo quy định',
      'Không xem xét lý do chính đáng khi vắng mặt',
      'Điều động vượt quá khả năng, sức khỏe',
      'Không bảo đảm chế độ trong thời gian điều động',
      'Không xác nhận thời gian thực hiện nhiệm vụ',
      'Điều động khi đang nuôi con nhỏ theo luật định',
      'Không bố trí nghỉ bù sau nhiệm vụ',
      'Có dấu hiệu ưu tiên, loại trừ khi điều động'
    ],
    '6. Chế độ tiền ăn, ngày công, trợ cấp': [
      'Chưa được chi trả tiền ăn trong huấn luyện',
      'Tiền ăn chi không đúng mức quy định',
      'Tính sai số ngày công được hưởng',
      'Chậm chi trả tiền ăn, ngày công',
      'Không được thanh toán tiền tàu xe',
      'Không được hưởng trợ cấp khi làm nhiệm vụ xa',
      'Không được hưởng phụ cấp đặc thù theo quy định',
      'Khấu trừ tiền không rõ căn cứ',
      'Không được truy lĩnh khoản còn thiếu',
      'Không được giải thích các khoản được hưởng',
      'Chi trả trùng hoặc bỏ sót đối tượng',
      'Không được hưởng chế độ khi tham gia đột xuất',
      'Đơn vị sử dụng lao động không thực hiện đúng chế độ',
      'Không có bảng thanh toán công khai, minh bạch',
      'Đề nghị kiểm tra lại toàn bộ khoản đã nhận'
    ],
    '7. Bảo hiểm, tai nạn, ốm đau': [
      'Tai nạn khi làm nhiệm vụ chưa được giải quyết',
      'Không được hướng dẫn hồ sơ tai nạn',
      'Chi phí khám chữa bệnh chưa được thanh toán',
      'Không được hưởng BHYT trong thời gian huấn luyện',
      'Không được hưởng trợ cấp tai nạn lao động',
      'Chậm xác nhận hồ sơ tai nạn',
      'Không đồng ý kết quả giám định mức tổn thương',
      'Gia đình chưa được hướng dẫn chế độ khi tử vong',
      'Không được hưởng chế độ khi ốm đau trong nhiệm vụ',
      'Vướng mắc BHXH trong thời gian tham gia DQTV'
    ],
    '8. Trang bị, vũ khí, công cụ hỗ trợ': [
      'Không được cấp phát trang bị theo quy định',
      'Trang bị cấp phát không đúng chủng loại',
      'Không được huấn luyện sử dụng vũ khí an toàn',
      'Bảo quản vũ khí, công cụ hỗ trợ chưa đúng quy trình',
      'Mất trang bị nhưng không rõ trách nhiệm',
      'Không được bồi thường khi trang bị hư hỏng do nhiệm vụ',
      'Sử dụng vũ khí, công cụ hỗ trợ sai mục đích',
      'Không được kiểm tra sức khỏe trước khi dùng vũ khí'
    ],
    '9. Kỷ luật, xử lý vi phạm': [
      'Không đồng ý hình thức kỷ luật',
      'Kỷ luật không đúng trình tự, thẩm quyền',
      'Không được giải thích lý do kỷ luật',
      'Không được quyền giải trình, khiếu nại',
      'Xử lý vi phạm không thống nhất giữa các đối tượng',
      'Không xem xét tình tiết giảm nhẹ',
      'Kỷ luật ảnh hưởng đến quyền lợi hợp pháp',
      'Không được xóa kỷ luật sau thời hạn theo luật'
    ],
    '10. Khiếu nại, tố cáo, tiêu cực, kiến nghị': [
      'Đơn khiếu nại, tố cáo không được tiếp nhận',
      'Chậm chuyển đơn đến cơ quan có thẩm quyền',
      'Không thông báo kết quả giải quyết đơn',
      'Không bảo mật danh tính người tố cáo',
      'Có dấu hiệu trù dập người phản ánh',
      'Lợi dụng chức vụ để trục lợi',
      'Nhận tiền, quà để thay đổi kết quả',
      'Làm giả hồ sơ, giấy tờ DQTV',
      'Không được giải thích quyền và nghĩa vụ khi phản ánh'
    ]
  },

  /* =========================================================
     4) GIÁO DỤC QUỐC PHÒNG VÀ AN NINH — 80 mục / 8 nhóm (GỢI Ý)
     Căn cứ: Luật GDQP&AN 30/2013/QH13; NĐ 13/2014/NĐ-CP
     ========================================================= */
  'Giáo dục quốc phòng và an ninh': {
    '1. Chương trình, nội dung môn học': [
      'Chương trình GDQP&AN không đúng quy định',
      'Thời lượng môn học bị cắt giảm',
      'Nội dung dạy thay, dạy ghép không đúng quy định',
      'Không được học đủ nội dung bắt buộc',
      'Giáo trình, tài liệu không đúng quy định',
      'Không được thực hành đầy đủ theo chương trình',
      'Nội dung GDQP&AN bị lồng ghép môn khác',
      'Không được cập nhật nội dung mới theo văn bản',
      'Chương trình không phù hợp cấp học, trình độ',
      'Bố trí thời gian học không hợp lý',
      'Không được kiểm tra, đánh giá đầy đủ nội dung',
      'Nội dung môn học không bảo đảm tính giáo dục'
    ],
    '2. Cơ sở giáo dục, trung tâm GDQP&AN': [
      'Cơ sở giáo dục chưa đủ điều kiện dạy GDQP&AN',
      'Trung tâm GDQP&AN không được công nhận',
      'Cơ sở vật chất, sân bãi không bảo đảm',
      'Thiếu trang thiết bị dạy học theo quy định',
      'Không được liên kết với trung tâm đủ điều kiện',
      'Không được công nhận kết quả học ở cơ sở khác',
      'Chuyển trường nhưng không được bảo lưu kết quả',
      'Cơ sở giáo dục thu học phí trái quy định',
      'Không có kế hoạch GDQP&AN được phê duyệt',
      'Cơ sở giáo dục không bảo đảm an toàn cho học viên',
      'Trung tâm không bảo đảm đủ giảng viên',
      'Không có báo cáo kết quả GDQP&AN theo quy định'
    ],
    '3. Đội ngũ giảng viên, giáo viên, báo cáo viên': [
      'Giảng viên không đủ chuẩn theo quy định',
      'Giảng viên không được bồi dưỡng nghiệp vụ',
      'Bố trí giảng viên không đúng chuyên môn',
      'Thiếu giảng viên, giáo viên GDQP&AN',
      'Giảng viên không được hưởng phụ cấp theo quy định',
      'Không được tham gia tập huấn, bồi dưỡng',
      'Giảng viên thỉnh giảng không đủ điều kiện',
      'Không có kế hoạch phát triển đội ngũ giảng viên',
      'Giảng viên bị phân công dạy vượt giờ quy định',
      'Không được đánh giá, phân loại giảng viên theo quy định'
    ],
    '4. Học phí, chế độ hỗ trợ, miễn giảm': [
      'Thu học phí GDQP&AN trái quy định',
      'Không được miễn, giảm học phí đúng đối tượng',
      'Không được hưởng trợ cấp theo quy định',
      'Chậm chi trả chế độ hỗ trợ học viên',
      'Thu thêm các khoản không có căn cứ',
      'Không được hoàn học phí khi bỏ học vì lý do chính đáng',
      'Đối tượng chính sách không được ưu tiên',
      'Không được hưởng chế độ khi học tại trung tâm',
      'Mức học phí không công khai, minh bạch',
      'Không được hỗ trợ tiền ăn, ở theo quy định'
    ],
    '5. Chứng nhận, chứng chỉ hoàn thành': [
      'Không được cấp chứng nhận hoàn thành GDQP&AN',
      'Chứng nhận cấp sai đối tượng',
      'Chứng nhận bị sai thông tin cá nhân',
      'Chậm cấp chứng nhận so với quy định',
      'Chứng nhận giả, không có giá trị pháp lý',
      'Không được công nhận chứng nhận do cơ sở khác cấp',
      'Không được cấp lại khi bị mất',
      'Chứng nhận không đúng mẫu quy định',
      'Cấp chứng nhận khống, không qua học tập',
      'Không được xác nhận khi chuyển trường, chuyển ngành'
    ],
    '6. Kiểm tra, đánh giá, thi tốt nghiệp': [
      'Đề thi không đúng nội dung, chương trình',
      'Tổ chức thi không đúng quy chế',
      'Đánh giá kết quả thiếu khách quan',
      'Không được phúc khảo bài thi theo quy định',
      'Điểm thi bị sai lệch không được điều chỉnh',
      'Không được thông báo kết quả đầy đủ',
      'Tổ chức thi không bảo đảm an toàn, nghiêm túc',
      'Không được dự thi do lý do khách quan',
      'Không được thi lại, học lại theo quy định'
    ],
    '7. Hành vi tiêu cực, vi phạm pháp luật': [
      'Dạy thay, dạy ghép không đúng quy định',
      'Cấp chứng nhận khống',
      'Làm giả hồ sơ, điểm thi',
      'Nhận tiền, quà để nâng điểm, cấp chứng nhận',
      'Thu các khoản tiền không có căn cứ',
      'Ép buộc học viên học thêm trái quy định',
      'Sử dụng giảng viên không đủ chuẩn',
      'Lợi dụng chức vụ để trục lợi',
      'Che giấu sai phạm trong GDQP&AN',
      'Đe dọa người phản ánh, tố cáo'
    ],
    '8. Khiếu nại, kiến nghị, phản ánh': [
      'Đơn kiến nghị không được tiếp nhận',
      'Chậm trả lời kiến nghị của học viên, phụ huynh',
      'Không được giải thích quyền và nghĩa vụ',
      'Không được hướng dẫn thủ tục khiếu nại',
      'Không được thông báo kết quả giải quyết',
      'Thông tin cá nhân bị sử dụng sai mục đích',
      'Không bảo mật thông tin người phản ánh',
      'Không xem xét nguyện vọng chính đáng của học viên'
    ]
  },

  /* =========================================================
     5) CHÍNH SÁCH VÀ HẬU PHƯƠNG QUÂN ĐỘI — 100 mục / 8 nhóm (GỢI Ý)
     Căn cứ: Pháp lệnh ưu đãi người có công; Luật BHXH; Luật NVQS;
             Luật DQTV; Luật DBĐV và các văn bản hướng dẫn
     ========================================================= */
  'Chính sách và hậu phương Quân đội': {
    '1. Chế độ DQTV': [
      'Chưa được chi trả tiền ăn trong huấn luyện',
      'Tính sai số ngày công được hưởng',
      'Phụ cấp chức vụ chưa được chi trả',
      'Phụ cấp chức vụ chi sai mức',
      'Không được hưởng trợ cấp khi làm nhiệm vụ',
      'Chậm chi trả chế độ',
      'Không được thanh toán tiền tàu xe',
      'Không được hưởng BHYT trong huấn luyện',
      'Không được hưởng trợ cấp tai nạn lao động',
      'Không được hưởng chế độ khi ốm đau, thai sản',
      'Không được hưởng chế độ khi tham gia đột xuất',
      'Không có bảng thanh toán công khai',
      'Không được truy lĩnh khoản còn thiếu',
      'Không được giải thích các khoản được hưởng',
      'Đề nghị kiểm tra lại toàn bộ khoản đã nhận'
    ],
    '2. Chế độ QNDB': [
      'Chưa được chi trả phụ cấp trách nhiệm',
      'Phụ cấp trách nhiệm chi sai mức',
      'Tính sai số tháng được hưởng phụ cấp',
      'Chậm chi trả phụ cấp',
      'Không được hưởng trợ cấp khi tập trung huấn luyện',
      'Không được thanh toán tiền ăn, đi lại',
      'Không được hưởng chế độ khi làm nhiệm vụ',
      'Không được hưởng BHYT, BHXH trong thời gian tập trung',
      'Không được hưởng trợ cấp tai nạn',
      'Không được giải thích các khoản được hưởng',
      'Không được truy lĩnh khoản còn thiếu',
      'Không được hưởng chế độ khi thôi đảm nhiệm'
    ],
    '3. Chế độ thương binh, bệnh binh, liệt sĩ': [
      'Chậm giải quyết hồ sơ thương binh',
      'Không được công nhận thương binh dù đủ điều kiện',
      'Sai tỷ lệ thương tật',
      'Không được hưởng trợ cấp hàng tháng đúng mức',
      'Chậm chi trả trợ cấp',
      'Không được cấp thẻ BHYT',
      'Không được hưởng chế độ điều dưỡng',
      'Không được hưởng chế độ dụng cụ chỉnh hình',
      'Không được công nhận liệt sĩ dù đủ điều kiện',
      'Chậm giải quyết hồ sơ liệt sĩ',
      'Không được cấp Bằng Tổ quốc ghi công',
      'Không được hưởng trợ cấp tuất',
      'Không được hưởng chế độ mộ, nghĩa trang liệt sĩ',
      'Không được hưởng chế độ thờ cúng liệt sĩ',
      'Không được hưởng chế độ khi bị bệnh nghề nghiệp'
    ],
    '4. Chế độ người có công, thân nhân': [
      'Không được công nhận người có công',
      'Không được hưởng trợ cấp hàng tháng',
      'Không được hưởng trợ cấp một lần',
      'Không được hưởng chế độ ưu đãi giáo dục',
      'Không được hưởng chế độ ưu đãi nhà ở',
      'Không được hưởng chế độ ưu đãi đất ở',
      'Không được hưởng chế độ vay vốn ưu đãi',
      'Không được hưởng chế độ BHYT',
      'Không được hưởng chế độ điều dưỡng',
      'Không được hưởng chế độ thăm hỏi, tặng quà',
      'Không được hưởng chế độ khi thân nhân mất',
      'Không được hưởng chế độ khi thay đổi nơi cư trú'
    ],
    '5. BHYT, BHXH, BHTN': [
      'Không được cấp thẻ BHYT đúng đối tượng',
      'Thẻ BHYT bị sai thông tin',
      'Không được hưởng BHYT khi khám chữa bệnh',
      'Không được thanh toán chi phí khám chữa bệnh',
      'Chậm giải quyết chế độ BHXH',
      'Không được hưởng BHXH một lần đúng quy định',
      'Không được hưởng lương hưu đúng mức',
      'Không được hưởng trợ cấp thất nghiệp',
      'Không được bảo lưu thời gian đóng BHXH',
      'Không được chốt sổ BHXH khi xuất ngũ',
      'Không được hưởng chế độ thai sản',
      'Không được hưởng chế độ tai nạn lao động, bệnh nghề nghiệp'
    ],
    '6. Nhà ở, đất ở, tái định cư': [
      'Không được hưởng chế độ hỗ trợ nhà ở',
      'Không được hưởng chế độ ưu đãi đất ở',
      'Không được ưu tiên mua nhà ở xã hội',
      'Không được hưởng chế độ tái định cư',
      'Chậm giải quyết hồ sơ nhà ở',
      'Không được hưởng chế độ khi giải phóng mặt bằng',
      'Không được hưởng chế độ khi di dời',
      'Không được hưởng chế độ hỗ trợ thuê nhà',
      'Không được hưởng chế độ ưu đãi vay vốn nhà ở',
      'Không được hưởng chế độ khi thay đổi chỗ ở'
    ],
    '7. Trợ cấp khác, ưu đãi khác': [
      'Không được hưởng trợ cấp khó khăn đột xuất',
      'Không được hưởng trợ cấp khi thiên tai, dịch bệnh',
      'Không được hưởng trợ cấp khi bị thương, ốm đau',
      'Không được hưởng trợ cấp mai táng phí',
      'Không được hưởng trợ cấp tuất hàng tháng',
      'Không được hưởng trợ cấp tuất một lần',
      'Không được hưởng chế độ ưu đãi tín dụng',
      'Không được hưởng chế độ ưu đãi việc làm',
      'Không được hưởng chế độ ưu đãi học nghề',
      'Không được hưởng chế độ ưu đãi đào tạo nghề',
      'Không được hưởng chế độ khi thân nhân qua đời',
      'Không được hưởng chế độ xuất ngũ đúng quy định'
    ],
    '8. Hồ sơ, thủ tục, khiếu nại': [
      'Hồ sơ không được tiếp nhận dù hợp lệ',
      'Hồ sơ bị thất lạc',
      'Chậm giải quyết hồ sơ so với quy định',
      'Không được hướng dẫn bổ sung hồ sơ',
      'Không được thông báo kết quả giải quyết',
      'Không được giải thích lý do từ chối',
      'Đơn khiếu nại không được tiếp nhận',
      'Chậm chuyển đơn đến cơ quan có thẩm quyền',
      'Không bảo mật thông tin người khiếu nại',
      'Có dấu hiệu trù dập người phản ánh',
      'Không được hướng dẫn thủ tục giám định',
      'Đề nghị kiểm tra lại toàn bộ quá trình giải quyết'
    ]
  },

  /* =========================================================
     6) KHÁC (giữ nguyên như cũ)
     ========================================================= */
  'Khác': {
    'Câu hỏi chung': [
      'Câu hỏi về thủ tục hành chính',
      'Câu hỏi về thẩm quyền giải quyết'
    ]
  }
};