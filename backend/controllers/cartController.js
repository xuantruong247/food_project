import userModel from "./../models/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    // Lấy giá trị id từ đối tượng req.body.userId (nếu cần)
    const userId = req.body.userId.id;

    // Tìm người dùng với id hợp lệ
    let userData = await userModel.findOne({ _id: userId });
    if (!userData)
      return res.json({ success: false, message: "User not found" });
    let cartData = userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userData, { cartData });

    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.body.userId.id;
    const itemId = req.body.itemId;

    let userData = await userModel.findById(userId);
    if (!userData)
      return res.json({ success: false, message: "User not found" });
    let cartData = userData.cartData;
    if (cartData[itemId] && cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    let userId = req.body.userId.id;
    let userData = await userModel.findById(userId);
    let cartData = userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
