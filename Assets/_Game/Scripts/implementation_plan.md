# 🎮 Kế Hoạch & Chi Tiết Các Thay Đổi: Ronaldo Penalty

---

## 📋 Chi Tiết Các Thay Đổi

### 1. Điều kiện kết thúc sau 3 quả sút ([`PenaltyGameManager.cs`](file:///f:/UnityProject/PLY_MiniSoccer3D/Assets/_Game/Scripts/PenaltyGame/PenaltyGameManager.cs))
- Người chơi thực hiện lần lượt cả 3 quả penalty qua 3 Round.
- Sau khi hoàn thành quả thứ 3, hệ thống đánh giá tổng kết:
  - **Thắng (Win)**: Cả 3 quả đều vào lưới (`totalGoals == 3`).
  - **Thua (Lose)**: Có ít nhất 1 quả không vào (`totalGoals < 3`).

---

### 2. Xử lý khi WIN (Chiến thắng)
- Chuyển Ronaldo về trạng thái Idle.
- Phát âm thanh chiến thắng `FxType.PlayerWin`.
- Bật GameObject Endcard.
- Nhấp vào Endcard chuyển hướng sang Store (`GameManager.GotoStore()`).

---

### 3. Xử lý khi LOSE (Thất bại)
- Phát âm thanh thất bại `FxType.PlayerLoose`.
- Hiển thị màn Lose (`"😭 GAME OVER 😭 impossible..."`).
- Sau khoảng 2 giây: Ẩn màn Lose, chuyển về gameplay ban đầu (Round 1, bóng về chấm phạt đền, crosshair và thủ môn tiếp tục di chuyển, hiện *"TAP TO KICK"*).
- Kích hoạt cơ chế Tap to Store: Người chơi tap bất kỳ đâu trên màn hình sẽ mở Store (`GameManager.GotoStore()`).

---

### 4. Di chuyển Defender AI ([`PenaltyDefenderAI.cs`](file:///f:/UnityProject/PLY_MiniSoccer3D/Assets/_Game/Scripts/PenaltyGame/PenaltyDefenderAI.cs))
- Bắt đầu di chuyển từ vị trí hiện tại về phía Right trước (không dịch chuyển đến Left rồi mới di chuyển).
