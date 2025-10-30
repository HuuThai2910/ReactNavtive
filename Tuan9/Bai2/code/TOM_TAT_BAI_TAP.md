# TÓM TẮT BÀI TẬP 2

## Yêu cầu bài tập

Theo hình ảnh đề bài, cần xây dựng ứng dụng Cafe World với:

### a. Dữ liệu từ API trả về list các loại thức uống

✅ **Đã hoàn thành**:

-   Tạo `services/api.ts` sử dụng axios để fetch dữ liệu
-   API endpoints: `/shops` và `/drinks`
-   Hiển thị dữ liệu trong các màn hình tương ứng

### b. Dữ liệu order lưu ở máy local (dùng sqlite)

✅ **Đã hoàn thành**:

-   Tạo `services/database.ts` sử dụng expo-sqlite
-   Database schema với 2 tables: `orders` và `order_items`
-   Các functions: init, addOrder, getAllOrders, deleteOrder

## Cấu trúc project đã tạo

```
code/
├── app/
│   ├── _layout.tsx                 # Root layout với Stack navigator
│   ├── (tabs)/
│   │   ├── _layout.tsx            # Tab navigator layout
│   │   ├── index.tsx              # Screen 01: Welcome
│   │   └── explore.tsx            # Menu navigation
│   ├── shops.tsx                  # Screen 02: Shops Near Me (API)
│   ├── drinks.tsx                 # Screen 03: Drinks (API)
│   └── orders.tsx                 # Screen 04: Your Orders (SQLite)
├── services/
│   ├── api.ts                     # Service gọi API
│   └── database.ts                # Service quản lý SQLite
├── types/
│   └── index.ts                   # TypeScript interfaces
├── MOCKAPI_SETUP.md               # Hướng dẫn setup MockAPI
├── HUONG_DAN_CHAY.md              # Hướng dẫn chạy project
└── PROJECT_README.md              # Documentation chi tiết
```

## Các màn hình đã implement

### 🏠 Screen 01: Welcome (API_Screen_01)

-   Hiển thị logo và title "Welcome to Cafe world"
-   Nút "GET STARTED" để bắt đầu
-   Khởi tạo SQLite database khi app start

### 🏪 Screen 02: Shops Near Me (API_Screen_02)

-   **Fetch từ API**: `GET /shops`
-   Hiển thị danh sách các cửa hàng cafe
-   Thông tin: ảnh, tên, địa chỉ, trạng thái, thời gian giao hàng
-   Có indicator cho shop đang accepting orders vs unavailable

### ☕ Screen 03: Drinks (API_Screen_03)

-   **Fetch từ API**: `GET /drinks`
-   Grid layout 2 cột hiển thị đồ uống
-   Mỗi item: ảnh, tên, giá
-   Nút +/- để add/remove vào cart
-   Nút "GO TO CART" hiển thị tổng tiền

### 🛒 Screen 04: Your Orders (API_Screen_04)

-   **Lưu trữ SQLite**: Đọc orders từ local database
-   Hiển thị danh sách orders đã lưu
-   Mỗi order: type (CAFE DELIVERY/CAFE), order ID, items, total
-   Nút "PAY NOW" cho mỗi order

## Công nghệ sử dụng

### Dependencies đã cài đặt:

```json
{
    "expo-sqlite": "latest", // SQLite database
    "axios": "latest" // HTTP client
}
```

### Core technologies:

-   ✅ **Expo Router**: File-based routing
-   ✅ **TypeScript**: Type safety
-   ✅ **expo-sqlite**: Local database
-   ✅ **axios**: API calls
-   ✅ **React Native**: UI components

## Tính năng chính

### 1. API Integration ✅

-   Service layer riêng biệt (`services/api.ts`)
-   Error handling
-   Type-safe với TypeScript interfaces
-   Async/await pattern

### 2. SQLite Database ✅

-   Auto-initialize khi app start
-   CRUD operations: Create, Read
-   Foreign key relationships
-   Transaction support

### 3. State Management ✅

-   Local state với useState
-   Cart management trong Drinks screen
-   Order persistence với SQLite

### 4. Navigation ✅

-   Expo Router với file-based routing
-   Stack navigation cho main flow
-   Tab navigation cho bottom tabs
-   Parameter passing giữa screens

### 5. UI/UX ✅

-   Responsive layout
-   Loading states
-   Empty states
-   Error handling với alerts
-   Modern styling với StyleSheet

## Flow hoạt động

```
1. App Start
   ↓
2. Initialize SQLite Database
   ↓
3. Welcome Screen
   ↓ [GET STARTED]
4. Menu Screen (Tab Navigation)
   ↓
   ├─→ Shops Near Me
   │   • Fetch shops từ API
   │   • Display shop list
   │
   ├─→ Drinks
   │   • Fetch drinks từ API
   │   • Add to cart (+/-)
   │   • GO TO CART
   │   ↓
   │   • Save order to SQLite
   │
   └─→ Your Orders
       • Load orders từ SQLite
       • Display order list
       • PAY NOW
```

## Database Schema

### Table: orders

| Column    | Type       | Description          |
| --------- | ---------- | -------------------- |
| id        | INTEGER PK | Auto increment       |
| orderId   | TEXT       | Order number (#1234) |
| type      | TEXT       | CAFE DELIVERY/CAFE   |
| total     | REAL       | Total amount         |
| createdAt | TEXT       | ISO timestamp        |

### Table: order_items

| Column     | Type       | Description         |
| ---------- | ---------- | ------------------- |
| id         | INTEGER PK | Auto increment      |
| orderId    | INTEGER FK | Reference to orders |
| drinkId    | TEXT       | Drink identifier    |
| drinkName  | TEXT       | Name of drink       |
| drinkImage | TEXT       | Image URL           |
| price      | REAL       | Unit price          |
| quantity   | INTEGER    | Quantity ordered    |

## API Endpoints

### GET /shops

```typescript
interface Shop {
    id: string;
    name: string;
    address: string;
    image: string;
    status: "accepting" | "tempory_unavailable";
    deliveryTime: string;
}
```

### GET /drinks

```typescript
interface Drink {
    id: string;
    name: string;
    price: number;
    image: string;
}
```

## Cách chạy project

```bash
# 1. Cài đặt dependencies
cd code
npm install

# 2. Setup MockAPI (xem MOCKAPI_SETUP.md)

# 3. Chạy app
npm start        # Expo dev server
npm run web      # Browser
npm run android  # Android
npm run ios      # iOS
```

## Kết luận

Đã hoàn thành đầy đủ yêu cầu bài tập:

-   ✅ Fetch dữ liệu từ API (shops và drinks)
-   ✅ Lưu trữ orders vào SQLite local database
-   ✅ 4 màn hình theo đúng design
-   ✅ Navigation flow hoàn chỉnh
-   ✅ Type-safe với TypeScript
-   ✅ Clean architecture với services layer
-   ✅ Error handling và loading states

Project sẵn sàng để demo và test!
