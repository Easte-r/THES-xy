// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_marry_answer_request = (function () {
        function cs_marry_answer_request() {
        }
        return cs_marry_answer_request;
    }());
    Sproto.cs_marry_answer_request = cs_marry_answer_request;
    __reflect(cs_marry_answer_request.prototype, "Sproto.cs_marry_answer_request");
    function _decode_cs_marry_answer_request(d) {
        var o = new cs_marry_answer_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.agree = d.ri();
                    break;
                case 1:
                    o.fromid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_marry_answer_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.agree != undefined) {
            se.wi(self.agree, 0);
        }
        if (self.fromid != undefined) {
            se.wi(self.fromid, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_answer_request"] = { en: _encode_cs_marry_answer_request, de: _decode_cs_marry_answer_request };
    var cs_marry_flower_request = (function () {
        function cs_marry_flower_request() {
        }
        return cs_marry_flower_request;
    }());
    Sproto.cs_marry_flower_request = cs_marry_flower_request;
    __reflect(cs_marry_flower_request.prototype, "Sproto.cs_marry_flower_request");
    function _decode_cs_marry_flower_request(d) {
        var o = new cs_marry_flower_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.quantity = d.ri();
                    break;
                case 1:
                    o.count = d.ri();
                    break;
                case 2:
                    o.autobuy = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_marry_flower_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.quantity != undefined) {
            se.wi(self.quantity, 0);
        }
        if (self.count != undefined) {
            se.wi(self.count, 1);
        }
        if (self.autobuy != undefined) {
            se.wi(self.autobuy, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_flower_request"] = { en: _encode_cs_marry_flower_request, de: _decode_cs_marry_flower_request };
    var cs_marry_flower_response = (function () {
        function cs_marry_flower_response() {
        }
        return cs_marry_flower_response;
    }());
    Sproto.cs_marry_flower_response = cs_marry_flower_response;
    __reflect(cs_marry_flower_response.prototype, "Sproto.cs_marry_flower_response");
    function _decode_cs_marry_flower_response(d) {
        var o = new cs_marry_flower_response;
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
    function _encode_cs_marry_flower_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wi(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_flower_response"] = { en: _encode_cs_marry_flower_response, de: _decode_cs_marry_flower_response };
    var cs_marry_greeting_request = (function () {
        function cs_marry_greeting_request() {
        }
        return cs_marry_greeting_request;
    }());
    Sproto.cs_marry_greeting_request = cs_marry_greeting_request;
    __reflect(cs_marry_greeting_request.prototype, "Sproto.cs_marry_greeting_request");
    function _decode_cs_marry_greeting_request(d) {
        var o = new cs_marry_greeting_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.dbid = d.ri();
                    break;
                case 1:
                    o.quantity = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_marry_greeting_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.dbid != undefined) {
            se.wi(self.dbid, 0);
        }
        if (self.quantity != undefined) {
            se.wi(self.quantity, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_greeting_request"] = { en: _encode_cs_marry_greeting_request, de: _decode_cs_marry_greeting_request };
    var cs_marry_greeting_response = (function () {
        function cs_marry_greeting_response() {
        }
        return cs_marry_greeting_response;
    }());
    Sproto.cs_marry_greeting_response = cs_marry_greeting_response;
    __reflect(cs_marry_greeting_response.prototype, "Sproto.cs_marry_greeting_response");
    function _decode_cs_marry_greeting_response(d) {
        var o = new cs_marry_greeting_response;
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
    function _encode_cs_marry_greeting_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wi(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_greeting_response"] = { en: _encode_cs_marry_greeting_response, de: _decode_cs_marry_greeting_response };
    var cs_marry_house_grade_request = (function () {
        function cs_marry_house_grade_request() {
        }
        return cs_marry_house_grade_request;
    }());
    Sproto.cs_marry_house_grade_request = cs_marry_house_grade_request;
    __reflect(cs_marry_house_grade_request.prototype, "Sproto.cs_marry_house_grade_request");
    function _decode_cs_marry_house_grade_request(d) {
        var o = new cs_marry_house_grade_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.grade = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_marry_house_grade_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.grade != undefined) {
            se.wi(self.grade, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_house_grade_request"] = { en: _encode_cs_marry_house_grade_request, de: _decode_cs_marry_house_grade_request };
    var cs_marry_house_grade_response = (function () {
        function cs_marry_house_grade_response() {
        }
        return cs_marry_house_grade_response;
    }());
    Sproto.cs_marry_house_grade_response = cs_marry_house_grade_response;
    __reflect(cs_marry_house_grade_response.prototype, "Sproto.cs_marry_house_grade_response");
    function _decode_cs_marry_house_grade_response(d) {
        var o = new cs_marry_house_grade_response;
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
    function _encode_cs_marry_house_grade_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wi(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_house_grade_response"] = { en: _encode_cs_marry_house_grade_response, de: _decode_cs_marry_house_grade_response };
    var cs_marry_love_revert_request = (function () {
        function cs_marry_love_revert_request() {
        }
        return cs_marry_love_revert_request;
    }());
    Sproto.cs_marry_love_revert_request = cs_marry_love_revert_request;
    __reflect(cs_marry_love_revert_request.prototype, "Sproto.cs_marry_love_revert_request");
    function _decode_cs_marry_love_revert_request(d) {
        var o = new cs_marry_love_revert_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.lovetype = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_marry_love_revert_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.lovetype != undefined) {
            se.wi(self.lovetype, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_love_revert_request"] = { en: _encode_cs_marry_love_revert_request, de: _decode_cs_marry_love_revert_request };
    var cs_marry_love_revert_response = (function () {
        function cs_marry_love_revert_response() {
        }
        return cs_marry_love_revert_response;
    }());
    Sproto.cs_marry_love_revert_response = cs_marry_love_revert_response;
    __reflect(cs_marry_love_revert_response.prototype, "Sproto.cs_marry_love_revert_response");
    function _decode_cs_marry_love_revert_response(d) {
        var o = new cs_marry_love_revert_response;
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
    function _encode_cs_marry_love_revert_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wi(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_love_revert_response"] = { en: _encode_cs_marry_love_revert_response, de: _decode_cs_marry_love_revert_response };
    var cs_marry_love_use_request = (function () {
        function cs_marry_love_use_request() {
        }
        return cs_marry_love_use_request;
    }());
    Sproto.cs_marry_love_use_request = cs_marry_love_use_request;
    __reflect(cs_marry_love_use_request.prototype, "Sproto.cs_marry_love_use_request");
    function _decode_cs_marry_love_use_request(d) {
        var o = new cs_marry_love_use_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.lovetype = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_marry_love_use_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.lovetype != undefined) {
            se.wi(self.lovetype, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_love_use_request"] = { en: _encode_cs_marry_love_use_request, de: _decode_cs_marry_love_use_request };
    var cs_marry_love_use_response = (function () {
        function cs_marry_love_use_response() {
        }
        return cs_marry_love_use_response;
    }());
    Sproto.cs_marry_love_use_response = cs_marry_love_use_response;
    __reflect(cs_marry_love_use_response.prototype, "Sproto.cs_marry_love_use_response");
    function _decode_cs_marry_love_use_response(d) {
        var o = new cs_marry_love_use_response;
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
    function _encode_cs_marry_love_use_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wi(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_love_use_response"] = { en: _encode_cs_marry_love_use_response, de: _decode_cs_marry_love_use_response };
    var cs_marry_propose_request = (function () {
        function cs_marry_propose_request() {
        }
        return cs_marry_propose_request;
    }());
    Sproto.cs_marry_propose_request = cs_marry_propose_request;
    __reflect(cs_marry_propose_request.prototype, "Sproto.cs_marry_propose_request");
    function _decode_cs_marry_propose_request(d) {
        var o = new cs_marry_propose_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.targetid = d.ri();
                    break;
                case 1:
                    o.grade = d.ri();
                    break;
                case 2:
                    o.spouse = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_marry_propose_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.targetid != undefined) {
            se.wi(self.targetid, 0);
        }
        if (self.grade != undefined) {
            se.wi(self.grade, 1);
        }
        if (self.spouse != undefined) {
            se.wi(self.spouse, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_propose_request"] = { en: _encode_cs_marry_propose_request, de: _decode_cs_marry_propose_request };
    var cs_marry_propose_response = (function () {
        function cs_marry_propose_response() {
        }
        return cs_marry_propose_response;
    }());
    Sproto.cs_marry_propose_response = cs_marry_propose_response;
    __reflect(cs_marry_propose_response.prototype, "Sproto.cs_marry_propose_response");
    function _decode_cs_marry_propose_response(d) {
        var o = new cs_marry_propose_response;
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
    function _encode_cs_marry_propose_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.ret != undefined) {
            se.wi(self.ret, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_marry_propose_response"] = { en: _encode_cs_marry_propose_response, de: _decode_cs_marry_propose_response };
    var cs_use_gift_request = (function () {
        function cs_use_gift_request() {
        }
        return cs_use_gift_request;
    }());
    Sproto.cs_use_gift_request = cs_use_gift_request;
    __reflect(cs_use_gift_request.prototype, "Sproto.cs_use_gift_request");
    function _decode_cs_use_gift_request(d) {
        var o = new cs_use_gift_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.quantity = d.ri();
                    break;
                case 1:
                    o.count = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_use_gift_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.quantity != undefined) {
            se.wi(self.quantity, 0);
        }
        if (self.count != undefined) {
            se.wi(self.count, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_use_gift_request"] = { en: _encode_cs_use_gift_request, de: _decode_cs_use_gift_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=marry_c2s.js.map