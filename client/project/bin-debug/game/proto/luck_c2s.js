// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_luck_draw_request = (function () {
        function cs_luck_draw_request() {
        }
        return cs_luck_draw_request;
    }());
    Sproto.cs_luck_draw_request = cs_luck_draw_request;
    __reflect(cs_luck_draw_request.prototype, "Sproto.cs_luck_draw_request");
    function _decode_cs_luck_draw_request(d) {
        var o = new cs_luck_draw_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.index = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_luck_draw_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.index != undefined) {
            se.wi(self.index, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_luck_draw_request"] = { en: _encode_cs_luck_draw_request, de: _decode_cs_luck_draw_request };
    var cs_luck_info_request = (function () {
        function cs_luck_info_request() {
        }
        return cs_luck_info_request;
    }());
    Sproto.cs_luck_info_request = cs_luck_info_request;
    __reflect(cs_luck_info_request.prototype, "Sproto.cs_luck_info_request");
    function _decode_cs_luck_info_request(d) {
        var o = new cs_luck_info_request;
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
    function _encode_cs_luck_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_luck_info_request"] = { en: _encode_cs_luck_info_request, de: _decode_cs_luck_info_request };
    var cs_luck_tianshen_request = (function () {
        function cs_luck_tianshen_request() {
        }
        return cs_luck_tianshen_request;
    }());
    Sproto.cs_luck_tianshen_request = cs_luck_tianshen_request;
    __reflect(cs_luck_tianshen_request.prototype, "Sproto.cs_luck_tianshen_request");
    function _decode_cs_luck_tianshen_request(d) {
        var o = new cs_luck_tianshen_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.typ = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_luck_tianshen_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.typ != undefined) {
            se.wi(self.typ, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_luck_tianshen_request"] = { en: _encode_cs_luck_tianshen_request, de: _decode_cs_luck_tianshen_request };
    var cs_luck_tianshen_response = (function () {
        function cs_luck_tianshen_response() {
        }
        return cs_luck_tianshen_response;
    }());
    Sproto.cs_luck_tianshen_response = cs_luck_tianshen_response;
    __reflect(cs_luck_tianshen_response.prototype, "Sproto.cs_luck_tianshen_response");
    function _decode_cs_luck_tianshen_response(d) {
        var o = new cs_luck_tianshen_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.rewards = d.roa("luck_tianshen_rewards");
                    break;
                case 3:
                    o.tenNum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_luck_tianshen_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.rewards != undefined) {
            se.woa("luck_tianshen_rewards", self.rewards, 1);
        }
        if (self.tenNum != undefined) {
            se.wi(self.tenNum, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_luck_tianshen_response"] = { en: _encode_cs_luck_tianshen_response, de: _decode_cs_luck_tianshen_response };
    var luck_tianshen_rewards = (function () {
        function luck_tianshen_rewards() {
        }
        return luck_tianshen_rewards;
    }());
    Sproto.luck_tianshen_rewards = luck_tianshen_rewards;
    __reflect(luck_tianshen_rewards.prototype, "Sproto.luck_tianshen_rewards");
    function _decode_luck_tianshen_rewards(d) {
        var o = new luck_tianshen_rewards;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                case 1:
                    o.num = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_luck_tianshen_rewards(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        if (self.num != undefined) {
            se.wi(self.num, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["luck_tianshen_rewards"] = { en: _encode_luck_tianshen_rewards, de: _decode_luck_tianshen_rewards };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=luck_c2s.js.map