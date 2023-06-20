"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/allbills";
exports.ids = ["pages/api/allbills"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middleware/monooges.js":
/*!********************************!*\
  !*** ./middleware/monooges.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            console.log(\"Already connected.\");\n            return handler(req, res);\n        }\n        try {\n            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n            console.log(\"Connected to the database.\");\n        } catch (error) {\n            console.error(\"Failed to connect to the database:\", error);\n            return;\n        }\n        return handler(req, res);\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL21vbm9vZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZLENBQUNDLFVBQVksT0FBT0MsS0FBS0MsTUFBUTtRQUNqRCxJQUFJSiwyRUFBa0MsRUFBRTtZQUN0Q08sUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT04sUUFBUUMsS0FBS0M7UUFDdEIsQ0FBQztRQUVELElBQUk7WUFDRixNQUFNSix1REFBZ0IsQ0FBQ1UsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQzVDTCxRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9LLE9BQU87WUFDZE4sUUFBUU0sS0FBSyxDQUFDLHNDQUFzQ0E7WUFDcEQ7UUFDRjtRQUVBLE9BQU9YLFFBQVFDLEtBQUtDO0lBQ3RCO0FBRUEsaUVBQWVILFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0c3RvcmUvLi9taWRkbGV3YXJlL21vbm9vZ2VzLmpzPzhkZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgY29ubmVjdERiID0gKGhhbmRsZXIpID0+IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgY29ubmVjdGVkLlwiKTtcclxuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./middleware/monooges.js\n");

/***/ }),

/***/ "(api)/./models/Bill.js":
/*!************************!*\
  !*** ./models/Bill.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// getting-started.js\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nmain().catch((err)=>console.log(err));\nasync function main() {\n    await mongoose.connect(process.env.MONGO_URI);\n}\nconst BillSchema = new mongoose.Schema({\n    email: {\n        type: String\n    },\n    bill_id: {\n        type: String\n    },\n    consignorName: {\n        type: String\n    },\n    consignorAddress: {\n        type: String\n    },\n    consigneeGst: {\n        type: String\n    },\n    date: {\n        type: String\n    },\n    from: {\n        type: String\n    },\n    to: {\n        type: String\n    },\n    distance: {\n        type: String\n    },\n    lorryno: {\n        type: String\n    },\n    phoneno: {\n        type: String\n    },\n    freightRate: {\n        type: String\n    },\n    deliveryaddress: {\n        type: String\n    },\n    pan: {\n        type: String\n    },\n    gstin: {\n        type: String\n    },\n    cgst: {\n        type: String\n    },\n    sgst: {\n        type: String\n    },\n    igst: {\n        type: String\n    },\n    total: {\n        type: String\n    },\n    goods: [\n        {\n            Package_name: {\n                type: String\n            },\n            No_of_packages: {\n                type: String\n            },\n            Description: {\n                type: String\n            },\n            Weight: {\n                type: String\n            },\n            rate: {\n                type: String\n            }\n        }\n    ]\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"Bill\", BillSchema)); // export default mongoose.model.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQmlsbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEscUJBQXFCO0FBQ3JCLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRW5DQyxPQUFPQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtBQUVsQyxlQUFlRixPQUFPO0lBQ3BCLE1BQU1GLFNBQVNPLE9BQU8sQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQzlDO0FBQ0EsTUFBTUMsYUFBYSxJQUFJWCxTQUFTWSxNQUFNLENBQ3BDO0lBQ0VDLE9BQU87UUFBRUMsTUFBTUM7SUFBTztJQUN0QkMsU0FBUztRQUFFRixNQUFNQztJQUFPO0lBQ3hCRSxlQUFlO1FBQUVILE1BQU1DO0lBQU87SUFDOUJHLGtCQUFrQjtRQUFFSixNQUFNQztJQUFPO0lBQ2pDSSxjQUFjO1FBQUVMLE1BQU1DO0lBQU87SUFDN0JLLE1BQU07UUFBRU4sTUFBTUM7SUFBTztJQUNyQk0sTUFBTTtRQUFFUCxNQUFNQztJQUFPO0lBQ3JCTyxJQUFJO1FBQUVSLE1BQU1DO0lBQU87SUFDbkJRLFVBQVU7UUFBRVQsTUFBTUM7SUFBTztJQUN6QlMsU0FBUztRQUFFVixNQUFNQztJQUFPO0lBQ3hCVSxTQUFTO1FBQUVYLE1BQU1DO0lBQU87SUFDeEJXLGFBQWE7UUFBRVosTUFBTUM7SUFBTztJQUM1QlksaUJBQWlCO1FBQUViLE1BQU1DO0lBQU87SUFDaENhLEtBQUs7UUFBRWQsTUFBTUM7SUFBTztJQUNwQmMsT0FBTztRQUFFZixNQUFNQztJQUFPO0lBQ3RCZSxNQUFNO1FBQUVoQixNQUFNQztJQUFPO0lBQ3JCZ0IsTUFBTTtRQUFFakIsTUFBTUM7SUFBTztJQUNyQmlCLE1BQU07UUFBRWxCLE1BQU1DO0lBQU87SUFDckJrQixPQUFPO1FBQUVuQixNQUFNQztJQUFPO0lBQ3RCbUIsT0FBTztRQUNMO1lBQ0VDLGNBQWM7Z0JBQUVyQixNQUFNQztZQUFPO1lBQzdCcUIsZ0JBQWdCO2dCQUFFdEIsTUFBTUM7WUFBTztZQUMvQnNCLGFBQWE7Z0JBQUV2QixNQUFNQztZQUFPO1lBQzVCdUIsUUFBUTtnQkFBRXhCLE1BQU1DO1lBQU87WUFDdkJ3QixNQUFNO2dCQUFFekIsTUFBTUM7WUFBTztRQUN2QjtLQUNEO0FBQ0gsR0FDQTtJQUFFeUIsWUFBWSxJQUFJO0FBQUM7QUFFckJ4QyxTQUFTeUMsTUFBTSxHQUFHLENBQUM7QUFDbkIsaUVBQWV6QyxTQUFTMEMsS0FBSyxDQUFDLFFBQVEvQixXQUFXQSxFQUFDLENBQ2xELDRFQUE0RSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRzdG9yZS8uL21vZGVscy9CaWxsLmpzPzk4ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2V0dGluZy1zdGFydGVkLmpzXHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5cclxubWFpbigpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XHJcbn1cclxuY29uc3QgQmlsbFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBiaWxsX2lkOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgY29uc2lnbm9yTmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGNvbnNpZ25vckFkZHJlc3M6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBjb25zaWduZWVHc3Q6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBkYXRlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZnJvbTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIHRvOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZGlzdGFuY2U6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBsb3JyeW5vOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcGhvbmVubzogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGZyZWlnaHRSYXRlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZGVsaXZlcnlhZGRyZXNzOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcGFuOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZ3N0aW46IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBjZ3N0OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgc2dzdDogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGlnc3Q6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICB0b3RhbDogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGdvb2RzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBQYWNrYWdlX25hbWU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAgICAgTm9fb2ZfcGFja2FnZXM6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAgICAgRGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAgICAgV2VpZ2h0OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgICAgIHJhdGU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxubW9uZ29vc2UubW9kZWxzID0ge307XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiQmlsbFwiLCBCaWxsU2NoZW1hKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJtYWluIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJCaWxsU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwiYmlsbF9pZCIsImNvbnNpZ25vck5hbWUiLCJjb25zaWdub3JBZGRyZXNzIiwiY29uc2lnbmVlR3N0IiwiZGF0ZSIsImZyb20iLCJ0byIsImRpc3RhbmNlIiwibG9ycnlubyIsInBob25lbm8iLCJmcmVpZ2h0UmF0ZSIsImRlbGl2ZXJ5YWRkcmVzcyIsInBhbiIsImdzdGluIiwiY2dzdCIsInNnc3QiLCJpZ3N0IiwidG90YWwiLCJnb29kcyIsIlBhY2thZ2VfbmFtZSIsIk5vX29mX3BhY2thZ2VzIiwiRGVzY3JpcHRpb24iLCJXZWlnaHQiLCJyYXRlIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Bill.js\n");

/***/ }),

/***/ "(api)/./pages/api/allbills.js":
/*!*******************************!*\
  !*** ./pages/api/allbills.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Bill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Bill */ \"(api)/./models/Bill.js\");\n/* harmony import */ var _middleware_monooges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/monooges */ \"(api)/./middleware/monooges.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst handler = async (req, res)=>{\n    const token = req.body.token;\n    const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, \"ourkey\");\n    // console.log(data);\n    let allbills = await _models_Bill__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n        email: data.email\n    });\n    console.log(allbills);\n    res.status(200).json({\n        allbills\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_monooges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxsYmlsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDYTtBQUNUO0FBRXpDLE1BQU1HLFVBQVUsT0FBT0MsS0FBS0MsTUFBUTtJQUNsQyxNQUFNQyxRQUFRRixJQUFJRyxJQUFJLENBQUNELEtBQUs7SUFDNUIsTUFBTUUsT0FBT04sMERBQW9CLENBQUNJLE9BQU87SUFDekMscUJBQXFCO0lBQ3JCLElBQUlJLFdBQVcsTUFBTVYseURBQVMsQ0FBQztRQUFFWSxPQUFPSixLQUFLSSxLQUFLO0lBQUM7SUFDbkRDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWkwsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFTjtJQUFTO0FBQ2xDO0FBQ0EsaUVBQWVULGdFQUFTQSxDQUFDRSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHN0b3JlLy4vcGFnZXMvYXBpL2FsbGJpbGxzLmpzP2Q2ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJpbGwgZnJvbSBcIi4uLy4uL21vZGVscy9CaWxsXCI7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uL21pZGRsZXdhcmUvbW9ub29nZXNcIjtcclxuaW1wb3J0IGpzb25ld2VidG9rZW4gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gcmVxLmJvZHkudG9rZW47XHJcbiAgY29uc3QgZGF0YSA9IGpzb25ld2VidG9rZW4udmVyaWZ5KHRva2VuLCBcIm91cmtleVwiKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBsZXQgYWxsYmlsbHMgPSBhd2FpdCBiaWxsLmZpbmQoeyBlbWFpbDogZGF0YS5lbWFpbCB9KTtcclxuICBjb25zb2xlLmxvZyhhbGxiaWxscyk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBhbGxiaWxscyB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0KGhhbmRsZXIpO1xyXG4iXSwibmFtZXMiOlsiYmlsbCIsImRiQ29ubmVjdCIsImpzb25ld2VidG9rZW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW4iLCJib2R5IiwiZGF0YSIsInZlcmlmeSIsImFsbGJpbGxzIiwiZmluZCIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/allbills.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/allbills.js"));
module.exports = __webpack_exports__;

})();