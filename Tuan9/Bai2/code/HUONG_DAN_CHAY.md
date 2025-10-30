# Hướng dẫn chạy project

## 1. Cài đặt dependencies

```bash
cd code
npm install
```

## 2. Cấu hình MockAPI

Làm theo hướng dẫn trong file `MOCKAPI_SETUP.md` để:

-   Tạo tài khoản MockAPI
-   Tạo các endpoint cho shops và drinks
-   Cập nhật API URL trong `services/api.ts`

## 3. Chạy ứng dụng

### Chạy trên web (dễ nhất để test)

```bash
npm run web
```

### Chạy trên Android

```bash
npm run android
```

### Chạy trên iOS (chỉ trên macOS)

```bash
npm run ios
```

### Hoặc chạy Expo Dev Server

```bash
npm start
```

Sau đó quét QR code bằng Expo Go app trên điện thoại.

## 4. Kiểm tra các tính năng

### a. Fetch dữ liệu từ API

1. Từ màn hình Welcome, nhấn "GET STARTED"
2. Nhấn "Shops Near Me" để xem danh sách shops từ API
3. Nhấn "Drinks" để xem danh sách đồ uống từ API

### b. Lưu trữ order với SQLite

1. Ở màn hình Drinks, thêm các món vào giỏ hàng (nhấn nút +)
2. Nhấn "GO TO CART" ở cuối màn hình
3. Order sẽ được lưu vào SQLite database
4. Nhấn "Your Orders" từ menu để xem các order đã lưu

## 5. Cấu trúc màn hình

```
Welcome Screen (index.tsx)
    ↓ GET STARTED
Menu Screen (explore.tsx)
    ↓
    ├─→ Shops Near Me (shops.tsx) [Fetch từ API]
    │       ↓
    ├─→ Drinks (drinks.tsx) [Fetch từ API]
    │       ↓ GO TO CART
    └─→ Your Orders (orders.tsx) [Đọc từ SQLite]
```

## 6. Database Location

SQLite database được tạo tự động khi app khởi động:

-   Tên database: `cafe_orders.db`
-   Tables: `orders`, `order_items`
-   Khởi tạo trong `app/(tabs)/index.tsx` useEffect

## 7. Troubleshooting

### API không hoạt động

-   Kiểm tra internet connection
-   Kiểm tra API URL trong `services/api.ts`
-   Test API trực tiếp trên browser: `https://[your-api-url]/shops`

### Database lỗi

-   Database được tạo tự động khi app start
-   Nếu có lỗi, thử xóa app và cài lại để reset database

### Expo không chạy

-   Chạy `npm install` lại
-   Xóa folder `node_modules` và `package-lock.json`, rồi `npm install` lại
-   Clear Expo cache: `npx expo start -c`

## 8. Testing trên thiết bị thực

### Android:

1. Cài đặt Expo Go từ Play Store
2. Chạy `npm start`
3. Quét QR code trong terminal

### iOS:

1. Cài đặt Expo Go từ App Store
2. Chạy `npm start`
3. Quét QR code trong terminal (iOS 13+) hoặc mở Camera và scan

## 9. Build production

```bash
# Build cho Android
npx expo build:android

# Build cho iOS
npx expo build:ios
```

## 10. Các tính năng đã implement

✅ Screen 01: Welcome screen với database initialization
✅ Screen 02: Shops Near Me - fetch từ MockAPI
✅ Screen 03: Drinks - fetch từ MockAPI, quản lý cart
✅ Screen 04: Your Orders - lưu và đọc từ SQLite
✅ Navigation với Expo Router
✅ TypeScript cho type safety
✅ Responsive layout
✅ Error handling
