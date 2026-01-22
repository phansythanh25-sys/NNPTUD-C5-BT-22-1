// ========================================
// NNPTUD-C5-BT-22-1: BÀI TẬP JAVASCRIPT - QUẢN LÝ SẢN PHẨM
// ========================================

// ========================================
// CÂU 1: Khai báo constructor function Product
// ========================================
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ========================================
// CÂU 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, tối thiểu 2 danh mục
// ========================================
const products = [
  new Product(1, "iPhone 15 Pro", 30000000, 10, "Electronics", true),
  new Product(2, "Samsung Galaxy S24", 25000000, 5, "Electronics", true),
  new Product(3, "AirPods Pro", 7500000, 20, "Accessories", true),
  new Product(4, "Apple Watch", 12000000, 8, "Accessories", false),
  new Product(5, "USB-C Cable", 500000, 50, "Accessories", true),
  new Product(6, "iPad Air", 28000000, 0, "Electronics", true),
  new Product(7, "MacBook Pro", 45000000, 3, "Electronics", true),
  new Product(8, "Magic Mouse", 2500000, 15, "Accessories", true),
];

console.log("\n========== CÂU 2: MẢNG SẢN PHẨM ==========");
console.log(products);

// ========================================
// CÂU 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
// ========================================
const productNamePrice = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log("\n========== CÂU 3: MẢNG TÊN - GIÁ ==========");
console.log(productNamePrice);

// ========================================
// CÂU 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
// ========================================
const availableProducts = products.filter(product => product.quantity > 0);

console.log("\n========== CÂU 4: SẢN PHẨM CÒN HÀNG ==========");
console.log(availableProducts);
console.log(`Tổng số sản phẩm còn hàng: ${availableProducts.length}`);

// ========================================
// CÂU 5: Kiểm tra có ít nhất một sản phẩm có giá trên 30.000.000 hay không
// ========================================
const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log("\n========== CÂU 5: KỂM TRA GIÁ > 30.000.000 ==========");
console.log(`Có sản phẩm có giá trên 30.000.000: ${hasExpensiveProduct}`);
if (hasExpensiveProduct) {
  const expensiveProducts = products.filter(p => p.price > 30000000);
  console.log("Danh sách sản phẩm giá > 30.000.000:");
  expensiveProducts.forEach(p => console.log(`  - ${p.name}: ${p.price.toLocaleString('vi-VN')} VNĐ`));
}

// ========================================
// CÂU 6: Kiểm tra tất cả sản phẩm danh mục "Accessories" có đang được bán không
// ========================================
const accessoriesProducts = products.filter(product => product.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable === true);

console.log("\n========== CÂU 6: KIỂM TRA ACCESSORIES CÓ BÁN KHÔNG ==========");
console.log(`Tất cả sản phẩm Accessories đang được bán: ${allAccessoriesAvailable}`);
console.log("Chi tiết sản phẩm Accessories:");
accessoriesProducts.forEach(p => {
  console.log(`  - ${p.name}: ${p.isAvailable ? "Đang bán" : "Không bán"}`);
});

// ========================================
// CÂU 7: Tính tổng giá trị kho hàng (price * quantity)
// ========================================
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);

console.log("\n========== CÂU 7: TỔNG GIÁ TRỊ KHO HÀNG ==========");
console.log(`Tổng giá trị kho: ${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`);
console.log("\nChi tiết từng sản phẩm:");
products.forEach(product => {
  const value = product.price * product.quantity;
  console.log(`  - ${product.name}: ${value.toLocaleString('vi-VN')} VNĐ (${product.price.toLocaleString('vi-VN')} × ${product.quantity})`);
});

// ========================================
// CÂU 8: Dùng for...of duyệt mảng và in: Tên sản phẩm - Danh mục - Trạng thái
// ========================================
console.log("\n========== CÂU 8: DUYỆT DÙNG FOR...OF ==========");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// ========================================
// CÂU 9: Dùng for...in để in tên thuộc tính và giá trị tương ứng
// ========================================
console.log("\n========== CÂU 9: DÙNG FOR...IN (PRODUCT ĐẦU TIÊN) ==========");
console.log(`Thuộc tính của sản phẩm "${products[0].name}":`);
for (const key in products[0]) {
  console.log(`  ${key}: ${products[0][key]}`);
}

// ========================================
// CÂU 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
// ========================================
const availableSalesProducts = products
  .filter(product => product.isAvailable === true && product.quantity > 0)
  .map(product => product.name);

console.log("\n========== CÂU 10: DANH SÁCH SẢN PHẨM ĐANG BÁN & CÒN HÀNG ==========");
console.log("Sản phẩm đang bán và còn hàng:");
availableSalesProducts.forEach((name, index) => {
  console.log(`  ${index + 1}. ${name}`);
});
console.log(`Tổng cộng: ${availableSalesProducts.length} sản phẩm`);

// ========================================
// TÓMLẠI THỐNG KÊ
// ========================================
console.log("\n========== THỐNG KÊ CHUNG ==========");
console.log(`Tổng số sản phẩm: ${products.length}`);
console.log(`Số danh mục: ${new Set(products.map(p => p.category)).size}`);
console.log(`Sản phẩm còn hàng: ${availableProducts.length}`);
console.log(`Sản phẩm đang bán & còn hàng: ${availableSalesProducts.length}`);
console.log(`Tổng giá trị kho: ${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`);
