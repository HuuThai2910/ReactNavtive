# Bài tập 2: Sử dụng Expo router, sqlite và api để xây dựng ứng dụng

## Mô tả

Ứng dụng Cafe World cho phép người dùng:

-   Xem danh sách các cửa hàng cafe gần đó (lấy từ API)
-   Xem danh sách đồ uống (lấy từ API)
-   Thêm đồ uống vào giỏ hàng
-   Lưu đơn hàng vào SQLite local database
-   Xem danh sách đơn hàng đã lưu

## Công nghệ sử dụng

-   **React Native** với **Expo Router** để điều hướng
-   **TypeScript** để type-safe
-   **expo-sqlite** để lưu trữ đơn hàng local
-   **axios** để gọi API
-   **MockAPI** để tạo API giả

## Cấu trúc dự án

```
code/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Welcome Screen (Screen 01)
│   │   └── explore.tsx         # Menu Screen
│   ├── shops.tsx               # Shops Near Me (Screen 02)
│   ├── drinks.tsx              # Drinks List (Screen 03)
│   └── orders.tsx              # Your Orders (Screen 04)
├── services/
│   ├── api.ts                  # API service để gọi MockAPI
│   └── database.ts             # SQLite database service
└── types/
    └── index.ts                # TypeScript interfaces

```

## Các màn hình

### Screen 01: Welcome

-   Màn hình chào mừng với logo
-   Nút "GET STARTED" để vào ứng dụng
-   Khởi tạo database khi app start

### Screen 02: Shops Near Me

-   Hiển thị danh sách các cửa hàng từ API
-   Mỗi shop hiển thị:
    -   Hình ảnh
    -   Tên và địa chỉ
    -   Trạng thái (Accepting Orders / Temporarily Unavailable)
    -   Thời gian giao hàng

### Screen 03: Drinks

-   Hiển thị danh sách đồ uống từ API dạng grid 2 cột
-   Mỗi item có:
    -   Hình ảnh
    -   Tên và giá
    -   Nút +/- để thêm/bớt số lượng
-   Nút "GO TO CART" hiển thị tổng tiền

### Screen 04: Your Orders

-   Hiển thị danh sách đơn hàng đã lưu trong SQLite
-   Mỗi order hiển thị:
    -   Loại order (CAFE DELIVERY / CAFE)
    -   Mã đơn hàng
    -   Danh sách món đã order
    -   Tổng tiền
    -   Nút "PAY NOW"

## API Endpoints

```
GET https://6458931f4eb3f6758179c6e2.mockapi.io/shops
GET https://6458931f4eb3f6758179c6e2.mockapi.io/drinks
```

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy app
npm start

# Hoặc chạy trên nền tảng cụ thể
npm run android
npm run ios
npm run web
```

## Database Schema

### Table: orders

-   id: INTEGER PRIMARY KEY AUTOINCREMENT
-   orderId: TEXT (mã đơn hàng, vd: #1234)
-   type: TEXT (CAFE DELIVERY hoặc CAFE)
-   total: REAL (tổng tiền)
-   createdAt: TEXT (thời gian tạo)

### Table: order_items

-   id: INTEGER PRIMARY KEY AUTOINCREMENT
-   orderId: INTEGER (foreign key đến orders.id)
-   drinkId: TEXT
-   drinkName: TEXT
-   drinkImage: TEXT
-   price: REAL
-   quantity: INTEGER

## Tính năng chính

✅ Fetch dữ liệu từ API (danh sách shops và drinks)
✅ Lưu trữ đơn hàng vào SQLite local database
✅ Quản lý giỏ hàng (thêm/bớt số lượng)
✅ Hiển thị danh sách đơn hàng từ database
✅ Navigation giữa các màn hình với Expo Router
✅ TypeScript cho type safety
