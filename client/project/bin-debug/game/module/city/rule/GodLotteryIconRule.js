var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GodLotteryIconRule = (function (_super) {
    __extends(GodLotteryIconRule, _super);
    //天神降临
    function GodLotteryIconRule(t) {
        var _this = _super.call(this, t) || this;
        _this.updateMessage = [];
        return _this;
    }
    GodLotteryIconRule.prototype.checkShowIcon = function () {
        return Deblocking.Check(DeblockingType.TYPE_117, true);
    };
    GodLotteryIconRule.prototype.checkShowRedPoint = function () {
        return false;
    };
    GodLotteryIconRule.prototype.tapExecute = function () {
        ViewManager.ins().open(GodLotteryWin);
    };
    return GodLotteryIconRule;
}(RuleIconBase));
__reflect(GodLotteryIconRule.prototype, "GodLotteryIconRule");
//# sourceMappingURL=GodLotteryIconRule.js.map