# Hướng dẫn cấu hình MockAPI

## Bước 1: Tạo tài khoản MockAPI

1. Truy cập https://mockapi.io/
2. Đăng ký tài khoản mới hoặc đăng nhập
3. Tạo một project mới

## Bước 2: Tạo endpoint "shops"

Tạo resource với tên `shops` và thêm các trường sau:

```json
{
    "id": "1",
    "name": "Kitanda Espresso & Acai-U District",
    "address": "1121 NE 45 St",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
    "status": "accepting",
    "deliveryTime": "5-10 minutes"
}
```

**Schema cho shops:**

-   id: ID
-   name: String
-   address: String
-   image: String (URL)
-   status: String (accepting hoặc tempory_unavailable)
-   deliveryTime: String

**Dữ liệu mẫu cho shops:**

```json
[
    {
        "id": "1",
        "name": "Kitanda Espresso & Acai-U District",
        "address": "1121 NE 45 St",
        "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
        "status": "accepting",
        "deliveryTime": "5-10 minutes"
    },
    {
        "id": "2",
        "name": "Jewel Box Cafe",
        "address": "1145 GE 54 St",
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
        "status": "tempory_unavailable",
        "deliveryTime": "10-15 minutes"
    },
    {
        "id": "3",
        "name": "Javasti Cafe",
        "address": "1107 GE 54 St",
        "image": "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=400",
        "status": "tempory_unavailable",
        "deliveryTime": "15-20 minutes"
    }
]
```

## Bước 3: Tạo endpoint "drinks"

Tạo resource với tên `drinks` và thêm các trường sau:

**Schema cho drinks:**

-   id: ID
-   name: String
-   price: Number
-   image: String (URL)

**Dữ liệu mẫu cho drinks:**

```json
[
    {
        "id": "1",
        "name": "Milk",
        "price": 20,
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200"
    },
    {
        "id": "2",
        "name": "Origin",
        "price": 22,
        "image": "https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?w=200"
    },
    {
        "id": "3",
        "name": "Salt",
        "price": 5,
        "image": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=200"
    },
    {
        "id": "4",
        "name": "Espresso",
        "price": 9,
        "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200"
    },
    {
        "id": "5",
        "name": "Capuchino",
        "price": 23,
        "image": "https://images.unsplash.com/photo-1572286258217-c8a5b7045120?w=200"
    },
    {
        "id": "6",
        "name": "Weasel",
        "price": 30,
        "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200"
    },
    {
        "id": "7",
        "name": "Culi",
        "price": 10,
        "image": "https://images.unsplash.com/photo-1611564551138-034859cad181?w=200"
    },
    {
        "id": "8",
        "name": "Catimor",
        "price": 9,
        "image": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=200"
    }
]
```

## Bước 4: Lấy API URL

Sau khi tạo xong, MockAPI sẽ cung cấp cho bạn một URL có dạng:

```
https://[your-project-id].mockapi.io
```

## Bước 5: Cập nhật API URL trong code

Mở file `services/api.ts` và cập nhật `API_BASE_URL`:

```typescript
const API_BASE_URL = "https://[your-project-id].mockapi.io";
```

Thay `[your-project-id]` bằng ID project của bạn trên MockAPI.

## Kiểm tra API

Sau khi setup, bạn có thể test API bằng cách truy cập:

-   `https://[your-project-id].mockapi.io/shops`
-   `https://[your-project-id].mockapi.io/drinks`

## Lưu ý

-   API URL mặc định trong code là: `https://6458931f4eb3f6758179c6e2.mockapi.io`
-   Nếu API này không hoạt động, bạn cần tạo MockAPI riêng theo hướng dẫn trên
-   Hình ảnh sử dụng từ Unsplash, bạn có thể thay bằng bất kỳ URL hình ảnh nào
