"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DateFormatter = /** @class */ (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.getFormattedDate = function () {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear();
    };
    return DateFormatter;
}(Date));
console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// expected output: "19-Aug-1975"
/*{
  class ExtendsArray extends Array<string> {
    searchItems(searchStr: string): string[] {
        return this.filter(item => item.includes(searchStr))
    }
  }

  let extendsArray = new ExtendsArray()
  extendsArray.push("Hello");
  extendsArray.push("World");
  console.log(extendsArray.searchItems("o"));
  
}
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYW5nZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0cmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQTRCLGlDQUFJO0lBQWhDOztJQVFFLENBQUM7SUFOQyx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztZQUN0RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQVUsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBSSxJQUFJLENBQUMsV0FBVyxFQUFJLENBQUM7SUFDOUUsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQVJILENBQTRCLElBQUksR0FRN0I7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLGlDQUFpQztBQUduQzs7Ozs7Ozs7Ozs7OztFQWFFIn0=