import React from "react";
import ReactDOM from "react-dom/client";
import AppLogo from "./assets/AppLogo.png";
import biryaniLogo from "./assets/biryani.png";

//App structure
// *Header
//     logo
//     NavItems
// *Body
//     Search
//     RestraurantContainer
//         RestraurantCard
// -img
// -Name of restraurant, Star Rating, Cuisine, etc.
// *Footer
//     Copyright
//     Links
//     Address
//     Contact

const restaurants = [
  {
    info: {
      id: "23719",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "JM Road",
      areaName: "Shivajinagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "23719",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 01:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-jm-road-shivajinagar-pune-23719",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "243625",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "R Deccan Mall",
      areaName: "JM Road",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "243625",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-r-deccan-mall-jm-road-pune-243625",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "42581",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "The Pavillion Mall",
      areaName: "Shivajinagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "42581",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4100,
      },
      parentId: "166",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "42 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹159",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-the-pavillion-mall-shivajinagar-pune-42581",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "394784",
      name: "Theobroma",
      cloudinaryImageId: "asd7v64r8hjmbx5nivyh",
      locality: "Karve Road",
      areaName: "Shivajinagar",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "394784",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-karve-road-shivajinagar-pune-394784",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "507940",
      name: "EatFit",
      cloudinaryImageId: "ee4f041cd8611dccc19f4267783ab5ea",
      locality: "Ghole Road",
      areaName: "Shivajinagar",
      costForTwo: "₹270 for two",
      cuisines: [
        "Healthy Food",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
        "Chinese",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "507940",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "76139",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-27 23:30:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eatfit-ghole-road-shivajinagar-pune-507940",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "32443",
      name: "Natural Ice Cream",
      cloudinaryImageId: "p8af4xnqjzsei0umtgnn",
      locality: "JM Road",
      areaName: "Shivajinagar",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      feeDetails: {
        restaurantId: "32443",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "2093",
      avgRatingString: "4.7",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/natural-ice-cream-jm-road-shivajinagar-pune-32443",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "18808",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Shaniwar Peth FC",
      areaName: "Shaniwar Peth",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "18808",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
          {
            name: "BASE_TIME",
          },
        ],
        totalFee: 3100,
      },
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "53 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-fc-shaniwar-peth-pune-18808",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "21001",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "FC Road",
      areaName: "Shivajinagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "21001",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-fc-road-shivajinagar-pune-21001",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "62934",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "chs0jbyj2osyqumr1wiu",
      locality: "Shaniwar Peth",
      areaName: "Narayan Peth",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "62934",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
          {
            name: "BASE_TIME",
          },
        ],
        totalFee: 3100,
      },
      parentId: "4925",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "57 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-shaniwar-peth-narayan-peth-pune-62934",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5624",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "FC Road",
      areaName: "Deccan Gymkhana",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "5624",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-fc-road-deccan-gymkhana-pune-5624",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25396",
      name: "Oven Story Pizza",
      cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
      locality: "Shaniwar Peth",
      areaName: "Narayan Peth",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "25396",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "3534",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "19-29 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹1099",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-story-pizza-shaniwar-peth-narayan-peth-pune-25396",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "33848",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "xxbztze8uhst6gb5jj9j",
      locality: "JM Road",
      areaName: "Shivajinagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "33848",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-jm-road-shivajinagar-pune-33848",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "288388",
      name: "Starbucks Coffee",
      cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
      locality: "FC Road",
      areaName: "Shivajinagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "288388",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "195515",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-fc-road-shivajinagar-pune-288388",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "155434",
      name: "The Good Bowl",
      cloudinaryImageId: "uvegdomfw2is591or42u",
      locality: "Shanivarpeth",
      areaName: "Shaniwar Peth",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "155434",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
          {
            name: "BASE_TIME",
          },
        ],
        totalFee: 3100,
      },
      parentId: "7918",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "52 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-shanivarpeth-shaniwar-peth-pune-155434",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "386176",
      name: "NIC Ice Creams",
      cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
      locality: "Shivaji Nagar",
      areaName: "JM Road",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "386176",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "6249",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹159",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nic-ice-creams-shivaji-nagar-jm-road-pune-386176",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "372376",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Law College Road",
      areaName: "Erandwane",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "372376",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4100,
      },
      parentId: "5588",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-law-college-road-erandwane-pune-372376",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16847",
      name: "Behrouz Biryani",
      cloudinaryImageId: "49c27c020e946f8f4fc13fdc9038525c",
      locality: "Senapati Bapat Road",
      areaName: "Shaniwar Peth",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "16847",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
          {
            name: "BASE_TIME",
          },
        ],
        totalFee: 3100,
      },
      parentId: "1803",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "50 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-senapati-bapat-road-shaniwar-peth-pune-16847",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "260595",
      name: "Wow! Momo",
      cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
      locality: "Camp",
      areaName: "Camp",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "260595",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4100,
      },
      parentId: "1776",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-camp-pune-260595",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "11887",
      name: "Samudra Veg",
      cloudinaryImageId: "b7r9runu5yjkfsl20tri",
      locality: "Pandurang Colony",
      areaName: "Erandwane",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Chinese", "South Indian"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "11887",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4300,
      },
      parentId: "176775",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-27 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/samudra-veg-pandurang-colony-erandwane-pune-11887",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "29639",
      name: "Eatsome- Wraps & Rolls",
      cloudinaryImageId: "e56240a4b58956f47a5a1f8392470fbe",
      locality: "JM Road",
      areaName: "Shivajinagar",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Biryani", "Street Food", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "29639",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "355",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eatsome-wraps-and-rolls-jm-road-shivajinagar-pune-29639",
      type: "WEBLINK",
    },
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logoContainer">
          <img className="appLogo" src={AppLogo} alt="LOGO" />
        </div>
        <div className="navContainer">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant, index) => {
          return <RestraurantCards restaurant={restaurant} key={index} />;
        })}
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestraurantCards = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props?.restaurant?.info;
  return (
    <div className="restraurentCard" style={styleCard}>
      <div className="cardLogoContainer">
        <img
          className="cardLogo"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/" +
            cloudinaryImageId
          }
          alt="Biryani"
        />
      </div>
      <h4 className="cardHeader">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} *</h4>
      <h4>{costForTwo}</h4>
      <h4>
        Delivery Time : {sla.slaString} for {sla.lastMileTravelString}
      </h4>
    </div>
  );
};

// RestraurantCards.defaultProps = {
//     rating: "4.9",
//     time: "30 mins"
//   }

const appLayout = (
  <div className="app">
    <Header />
    <Body />
  </div>
);

root.render(appLayout);
