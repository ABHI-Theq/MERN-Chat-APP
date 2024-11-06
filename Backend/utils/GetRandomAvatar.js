function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function generateRandomAvatarURL(gender,username) {
    // Expanded gender-specific options with about 50 choices per feature
    const options = {
      male: {
        topType: [
          "ShortHairShortFlat", "ShortHairDreads01", "ShortHairShortCurly", "ShortHairTheCaesar",
          "ShortHairFrizzle", "ShortHairRound", "ShortHairSides", "ShortHairDreads02",
          "ShortHairShortWaved", "ShortHairShaggyMullet", "ShortHairTheCaesarSidePart",
          "ShortHairShortFlat", "ShortHairDreads01", "ShortHairShortCurly", "ShortHairFrizzle",
          "ShortHairSides", "ShortHairDreads01", "ShortHairTheCaesar", "ShortHairRound",
          "ShortHairSides", "ShortHairDreads02", "ShortHairShortWaved", "ShortHairShortWaved",
          "ShortHairTheCaesar", "ShortHairShaggyMullet", "ShortHairSides", "ShortHairFrizzle",
          "ShortHairShortFlat", "ShortHairRound", "ShortHairDreads02", "ShortHairShortCurly",
          "ShortHairShortFlat", "ShortHairSides", "ShortHairTheCaesarSidePart", "ShortHairShaggyMullet",
          "ShortHairShortCurly", "ShortHairDreads01", "ShortHairFrizzle", "ShortHairShortFlat",
          "ShortHairShortFlat", "ShortHairDreads02", "ShortHairRound", "ShortHairShortWaved",
          "ShortHairDreads02", "ShortHairShortWaved", "ShortHairShortCurly", "ShortHairFrizzle",
          "ShortHairShaggyMullet", "ShortHairRound", "ShortHairDreads01", "ShortHairShortFlat"
        ],
        facialHairType: [
          "Blank", "BeardLight", "BeardMajestic", "MoustacheFancy", "MoustacheMagnum",
          "BeardMedium", "BeardDark", "Blank", "Blank", "MoustacheMagnum", "BeardLight",
          "Blank", "BeardMedium", "BeardDark", "MoustacheFancy", "Blank", "BeardLight",
          "BeardMajestic", "Blank", "MoustacheMagnum", "BeardDark", "Blank", "BeardMedium",
          "BeardLight", "Blank", "BeardMajestic", "MoustacheFancy", "Blank", "BeardDark",
          "Blank", "BeardLight", "BeardMedium", "MoustacheFancy", "BeardLight", "Blank",
          "BeardMajestic", "MoustacheMagnum", "Blank", "MoustacheFancy", "BeardMedium",
          "BeardLight", "BeardDark", "Blank", "BeardMedium", "BeardDark", "Blank",
          "BeardMajestic", "Blank", "BeardDark", "BeardMedium"
        ],
        clotheType: [
          "BlazerShirt", "Hoodie", "ShirtCrewNeck", "BlazerSweater", "CollarSweater",
          "ShirtScoopNeck", "GraphicShirt", "Overall", "ShirtVNeck", "BlazerShirt",
          "Hoodie", "ShirtCrewNeck", "BlazerSweater", "BlazerShirt", "CollarSweater",
          "ShirtVNeck", "GraphicShirt", "Overall", "ShirtScoopNeck", "ShirtCrewNeck",
          "BlazerSweater", "BlazerShirt", "ShirtScoopNeck", "Overall", "ShirtVNeck",
          "Hoodie", "ShirtCrewNeck", "GraphicShirt", "BlazerShirt", "Overall",
          "ShirtVNeck", "BlazerSweater", "GraphicShirt", "ShirtScoopNeck", "Overall",
          "BlazerShirt", "CollarSweater", "BlazerSweater", "GraphicShirt", "BlazerShirt",
          "ShirtScoopNeck", "ShirtVNeck", "Overall", "ShirtCrewNeck", "CollarSweater",
          "BlazerSweater", "ShirtScoopNeck", "BlazerShirt", "Overall", "BlazerSweater"
        ],
        accessoriesType: [
          "Blank", "Prescription02", "Round", "Wayfarers", "Sunglasses",
          "Kurt", "Prescription01", "Blank", "Wayfarers", "Sunglasses",
          "Prescription02", "Blank", "Round", "Wayfarers", "Sunglasses",
          "Kurt", "Blank", "Prescription01", "Round", "Wayfarers",
          "Prescription02", "Sunglasses", "Prescription01", "Round", "Blank",
          "Wayfarers", "Prescription02", "Sunglasses", "Round", "Blank",
          "Prescription01", "Wayfarers", "Prescription02", "Round", "Sunglasses",
          "Kurt", "Blank", "Prescription02", "Round", "Wayfarers",
          "Sunglasses", "Kurt", "Prescription01", "Round", "Blank",
          "Prescription02", "Wayfarers", "Round", "Kurt", "Sunglasses"
        ]
      },
      female: {
        topType: [
          "LongHairStraight", "LongHairCurly", "LongHairNotTooLong", "LongHairStraightStrand",
          "LongHairFro", "LongHairBigHair", "LongHairBob", "LongHairFrida",
          "LongHairShavedSides", "LongHairStraight2", "LongHairFroBand", "LongHairCurly",
          "LongHairStraight", "LongHairCurly", "LongHairStraightStrand", "LongHairBob",
          "LongHairBigHair", "LongHairFrida", "LongHairStraight", "LongHairStraight2",
          "LongHairCurly", "LongHairNotTooLong", "LongHairStraightStrand", "LongHairFro",
          "LongHairBigHair", "LongHairShavedSides", "LongHairBob", "LongHairFrida",
          "LongHairStraight2", "LongHairFroBand", "LongHairCurly", "LongHairBob",
          "LongHairFrida", "LongHairBigHair", "LongHairStraightStrand", "LongHairFro",
          "LongHairBob", "LongHairBigHair", "LongHairShavedSides", "LongHairCurly",
          "LongHairNotTooLong", "LongHairStraight", "LongHairFro", "LongHairStraightStrand",
          "LongHairStraight2", "LongHairCurly", "LongHairFroBand", "LongHairBob",
          "LongHairStraightStrand", "LongHairFrida"
        ],
        facialHairType: ["Blank"], // Typically no facial hair for female avatars
        clotheType: [
          "BlazerShirt", "Overall", "ShirtScoopNeck", "BlazerSweater", "GraphicShirt",
          "ShirtVNeck", "CollarSweater", "Hoodie", "ShirtCrewNeck", "BlazerSweater",
          "BlazerShirt", "Overall", "ShirtScoopNeck", "ShirtVNeck", "GraphicShirt",
          "Overall", "ShirtCrewNeck", "Hoodie", "BlazerShirt", "CollarSweater",
          "ShirtVNeck", "BlazerSweater", "GraphicShirt", "BlazerShirt", "ShirtScoopNeck",
          "CollarSweater", "Overall", "ShirtCrewNeck", "ShirtVNeck", "BlazerSweater",
          "BlazerShirt", "GraphicShirt", "Overall", "ShirtScoopNeck", "Hoodie",
          "ShirtCrewNeck", "BlazerSweater", "BlazerShirt", "Overall", "ShirtVNeck",
          "CollarSweater", "GraphicShirt", "ShirtScoopNeck", "BlazerSweater", "Overall",
          "BlazerShirt", "ShirtCrewNeck", "ShirtVNeck", "GraphicShirt", "BlazerSweater"
        ],
        accessoriesType: [
          "Kurt", "Prescription01", "Round", "Sunglasses", "Blank",
          "Wayfarers", "Blank", "Round", "Prescription02", "Sunglasses",
          "Prescription01", "Blank", "Round", "Wayfarers", "Prescription02",
          "Sunglasses", "Round", "Kurt", "Prescription02", "Round",
          "Wayfarers", "Prescription02", "Kurt", "Sunglasses", "Blank",
          "Wayfarers", "Prescription01", "Kurt", "Sunglasses", "Prescription02",
          "Blank", "Wayfarers", "Prescription01", "Round", "Sunglasses",
          "Kurt", "Blank", "Round", "Prescription02", "Wayfarers",
          "Round", "Prescription01", "Wayfarers", "Sunglasses", "Blank",
          "Prescription01", "Round", "Kurt", "Prescription02", "Wayfarers"
        ]
      }
    };
  
    const genderOptions = options[gender.toLowerCase()] || options["male"]; // Default to "male" if no match
  
    // Randomly select each feature
    const topType = getRandomElement(genderOptions.topType);
    const facialHairType = getRandomElement(genderOptions.facialHairType);
    const clotheType = getRandomElement(genderOptions.clotheType);
    const accessoriesType = getRandomElement(genderOptions.accessoriesType);
  
    // Build the Avataaars URL
    return `https://avataaars.io/?avatarStyle=Circle&topType=${topType}&facialHairType=${facialHairType}&clotheType=${clotheType}&accessoriesType=${accessoriesType}&username=${encodeURIComponent(username)}`;
  }

  export default generateRandomAvatarURL
  
  // Example usage
//   console.log(generateRandomAvatarURL("male"));   // Generates a random male avatar
//   console.log(generateRandomAvatarURL("female")); // Generates a random female avatar
  