// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_welfare_bonus_open_request = (function () {
        function cs_welfare_bonus_open_request() {
        }
        return cs_welfare_bonus_open_request;
    }());
    Sproto.cs_welfare_bonus_open_request = cs_welfare_bonus_open_request;
    __reflect(cs_welfare_bonus_open_request.prototype, "Sproto.cs_welfare_bonus_open_request");
    function _decode_cs_welfare_bonus_open_request(d) {
        var o = new cs_welfare_bonus_open_request;
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
    function _encode_cs_welfare_bonus_open_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_bonus_open_request"] = { en: _encode_cs_welfare_bonus_open_request, de: _decode_cs_welfare_bonus_open_request };
    var cs_welfare_bonus_open_response = (function () {
        function cs_welfare_bonus_open_response() {
        }
        return cs_welfare_bonus_open_response;
    }());
    Sproto.cs_welfare_bonus_open_response = cs_welfare_bonus_open_response;
    __reflect(cs_welfare_bonus_open_response.prototype, "Sproto.cs_welfare_bonus_open_response");
    function _decode_cs_welfare_bonus_open_response(d) {
        var o = new cs_welfare_bonus_open_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.bybNum = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_bonus_open_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.bybNum != undefined) {
            se.wi(self.bybNum, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_bonus_open_response"] = { en: _encode_cs_welfare_bonus_open_response, de: _decode_cs_welfare_bonus_open_response };
    var cs_welfare_get_loginreward_request = (function () {
        function cs_welfare_get_loginreward_request() {
        }
        return cs_welfare_get_loginreward_request;
    }());
    Sproto.cs_welfare_get_loginreward_request = cs_welfare_get_loginreward_request;
    __reflect(cs_welfare_get_loginreward_request.prototype, "Sproto.cs_welfare_get_loginreward_request");
    function _decode_cs_welfare_get_loginreward_request(d) {
        var o = new cs_welfare_get_loginreward_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.indexDay = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_get_loginreward_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.indexDay != undefined) {
            se.wi(self.indexDay, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_get_loginreward_request"] = { en: _encode_cs_welfare_get_loginreward_request, de: _decode_cs_welfare_get_loginreward_request };
    var cs_welfare_lv_reward_request = (function () {
        function cs_welfare_lv_reward_request() {
        }
        return cs_welfare_lv_reward_request;
    }());
    Sproto.cs_welfare_lv_reward_request = cs_welfare_lv_reward_request;
    __reflect(cs_welfare_lv_reward_request.prototype, "Sproto.cs_welfare_lv_reward_request");
    function _decode_cs_welfare_lv_reward_request(d) {
        var o = new cs_welfare_lv_reward_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.no = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_lv_reward_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.no != undefined) {
            se.wi(self.no, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_lv_reward_request"] = { en: _encode_cs_welfare_lv_reward_request, de: _decode_cs_welfare_lv_reward_request };
    var cs_welfare_lv_reward_response = (function () {
        function cs_welfare_lv_reward_response() {
        }
        return cs_welfare_lv_reward_response;
    }());
    Sproto.cs_welfare_lv_reward_response = cs_welfare_lv_reward_response;
    __reflect(cs_welfare_lv_reward_response.prototype, "Sproto.cs_welfare_lv_reward_response");
    function _decode_cs_welfare_lv_reward_response(d) {
        var o = new cs_welfare_lv_reward_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.lvReward = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_lv_reward_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.lvReward != undefined) {
            se.wi(self.lvReward, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_lv_reward_response"] = { en: _encode_cs_welfare_lv_reward_response, de: _decode_cs_welfare_lv_reward_response };
    var cs_welfare_redeemcode_request = (function () {
        function cs_welfare_redeemcode_request() {
        }
        return cs_welfare_redeemcode_request;
    }());
    Sproto.cs_welfare_redeemcode_request = cs_welfare_redeemcode_request;
    __reflect(cs_welfare_redeemcode_request.prototype, "Sproto.cs_welfare_redeemcode_request");
    function _decode_cs_welfare_redeemcode_request(d) {
        var o = new cs_welfare_redeemcode_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.redeemcode = d.rs();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_redeemcode_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.redeemcode != undefined) {
            se.ws(self.redeemcode, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_redeemcode_request"] = { en: _encode_cs_welfare_redeemcode_request, de: _decode_cs_welfare_redeemcode_request };
    var cs_welfare_redeemcode_response = (function () {
        function cs_welfare_redeemcode_response() {
        }
        return cs_welfare_redeemcode_response;
    }());
    Sproto.cs_welfare_redeemcode_response = cs_welfare_redeemcode_response;
    __reflect(cs_welfare_redeemcode_response.prototype, "Sproto.cs_welfare_redeemcode_response");
    function _decode_cs_welfare_redeemcode_response(d) {
        var o = new cs_welfare_redeemcode_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_redeemcode_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wi(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_redeemcode_response"] = { en: _encode_cs_welfare_redeemcode_response, de: _decode_cs_welfare_redeemcode_response };
    var cs_welfare_reward_request = (function () {
        function cs_welfare_reward_request() {
        }
        return cs_welfare_reward_request;
    }());
    Sproto.cs_welfare_reward_request = cs_welfare_reward_request;
    __reflect(cs_welfare_reward_request.prototype, "Sproto.cs_welfare_reward_request");
    function _decode_cs_welfare_reward_request(d) {
        var o = new cs_welfare_reward_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.no = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_reward_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.no != undefined) {
            se.wi(self.no, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_reward_request"] = { en: _encode_cs_welfare_reward_request, de: _decode_cs_welfare_reward_request };
    var cs_welfare_reward_response = (function () {
        function cs_welfare_reward_response() {
        }
        return cs_welfare_reward_response;
    }());
    Sproto.cs_welfare_reward_response = cs_welfare_reward_response;
    __reflect(cs_welfare_reward_response.prototype, "Sproto.cs_welfare_reward_response");
    function _decode_cs_welfare_reward_response(d) {
        var o = new cs_welfare_reward_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.welfareReward = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_reward_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.welfareReward != undefined) {
            se.wi(self.welfareReward, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_reward_response"] = { en: _encode_cs_welfare_reward_response, de: _decode_cs_welfare_reward_response };
    var cs_welfare_signin_req_request = (function () {
        function cs_welfare_signin_req_request() {
        }
        return cs_welfare_signin_req_request;
    }());
    Sproto.cs_welfare_signin_req_request = cs_welfare_signin_req_request;
    __reflect(cs_welfare_signin_req_request.prototype, "Sproto.cs_welfare_signin_req_request");
    function _decode_cs_welfare_signin_req_request(d) {
        var o = new cs_welfare_signin_req_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.rewardType = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_signin_req_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.rewardType != undefined) {
            se.wi(self.rewardType, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_signin_req_request"] = { en: _encode_cs_welfare_signin_req_request, de: _decode_cs_welfare_signin_req_request };
    var cs_welfare_signin_req_response = (function () {
        function cs_welfare_signin_req_response() {
        }
        return cs_welfare_signin_req_response;
    }());
    Sproto.cs_welfare_signin_req_response = cs_welfare_signin_req_response;
    __reflect(cs_welfare_signin_req_response.prototype, "Sproto.cs_welfare_signin_req_response");
    function _decode_cs_welfare_signin_req_response(d) {
        var o = new cs_welfare_signin_req_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.rewardType = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_welfare_signin_req_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.rewardType != undefined) {
            se.wi(self.rewardType, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_welfare_signin_req_response"] = { en: _encode_cs_welfare_signin_req_response, de: _decode_cs_welfare_signin_req_response };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=welfare_c2s.js.map