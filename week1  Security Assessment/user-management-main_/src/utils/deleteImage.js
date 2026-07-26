import fs from "fs";

function deleteImage(url) {
  try {
    fs.unlinkSync(url);
  } catch (err) {
    console.log("Failed to delete image: ", err);
  }
}

export default deleteImage;
