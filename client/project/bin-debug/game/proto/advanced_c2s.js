// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_advanced_buy_request = (function () {
        function cs_advanced_buy_request() {
        }
        return cs_advanced_buy_request;
    }());
    Sproto.cs_advanced_buy_request = cs_advanced_buy_request;
    __reflect(cs_advanced_buy_request.prototype, "Sproto.cs_advanced_buy_request");
    function _decode_cs_advanced_buy_request(d) {
        var o = new cs_advanced_buy_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                case 1:
                    o.num = d.ri();
                    break;
                case 2:
                    o.typ = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_advanced_buy_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        if (self.num != undefined) {
            se.wi(self.num, 1);
        }
        if (self.typ != undefined) {
            se.wi(self.typ, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_advanced_buy_request"] = { en: _encode_cs_advanced_buy_request, de: _decode_cs_advanced_buy_request };
    var cs_advanced_charger_reward_request = (function () {
        function cs_advanced_charger_reward_request() {
        }
        return cs_advanced_charger_reward_request;
    }());
    Sproto.cs_advanced_charger_reward_request = cs_advanced_charger_reward_request;
    __reflect(cs_advanced_charger_reward_request.prototype, "Sproto.cs_advanced_charger_reward_request");
    function _decode_cs_advanced_charger_reward_request(d) {
        var o = new cs_advanced_charger_reward_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_advanced_charger_reward_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_advanced_charger_reward_request"] = { en: _encode_cs_advanced_charger_reward_request, de: _decode_cs_advanced_charger_reward_request };
    var cs_advanced_lv_reward_request = (function () {
        function cs_advanced_lv_reward_request() {
        }
        return cs_advanced_lv_reward_request;
    }());
    Sproto.cs_advanced_lv_reward_request = cs_advanced_lv_reward_request;
    __reflect(cs_advanced_lv_reward_request.prototype, "Sproto.cs_advanced_lv_reward_request");
    function _decode_cs_advanced_lv_reward_request(d) {
        var o = new cs_advanced_lv_reward_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.typ = d.ri();
                    break;
                case 1:
                    o.id = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_advanced_lv_reward_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.typ != undefined) {
            se.wi(self.typ, 0);
        }
        if (self.id != undefined) {
            se.wi(self.id, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_advanced_lv_reward_request"] = { en: _encode_cs_advanced_lv_reward_request, de: _decode_cs_advanced_lv_reward_request };
    var cs_advanced_rank_request = (function () {
        function cs_advanced_rank_request() {
        }
        return cs_advanced_rank_request;
    }());
    Sproto.cs_advanced_rank_request = cs_advanced_rank_request;
    __reflect(cs_advanced_rank_request.prototype, "Sproto.cs_advanced_rank_request");
    function _decode_cs_advanced_rank_request(d) {
        var o = new cs_advanced_rank_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_advanced_rank_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_advanced_rank_request"] = { en: _encode_cs_advanced_rank_request, de: _decode_cs_advanced_rank_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=advanced_c2s.js.map