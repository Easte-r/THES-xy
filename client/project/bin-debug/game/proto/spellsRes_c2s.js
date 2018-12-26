// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_spellsRes_lock_request = (function () {
        function cs_spellsRes_lock_request() {
        }
        return cs_spellsRes_lock_request;
    }());
    Sproto.cs_spellsRes_lock_request = cs_spellsRes_lock_request;
    __reflect(cs_spellsRes_lock_request.prototype, "Sproto.cs_spellsRes_lock_request");
    function _decode_cs_spellsRes_lock_request(d) {
        var o = new cs_spellsRes_lock_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.lock = d.ri();
                    break;
                case 1:
                    o.spellsId = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_lock_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.lock != undefined) {
            se.wi(self.lock, 0);
        }
        if (self.spellsId != undefined) {
            se.wi(self.spellsId, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_lock_request"] = { en: _encode_cs_spellsRes_lock_request, de: _decode_cs_spellsRes_lock_request };
    var cs_spellsRes_lock_response = (function () {
        function cs_spellsRes_lock_response() {
        }
        return cs_spellsRes_lock_response;
    }());
    Sproto.cs_spellsRes_lock_response = cs_spellsRes_lock_response;
    __reflect(cs_spellsRes_lock_response.prototype, "Sproto.cs_spellsRes_lock_response");
    function _decode_cs_spellsRes_lock_response(d) {
        var o = new cs_spellsRes_lock_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.spellsId = d.ri();
                    break;
                case 2:
                    o.lock = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_lock_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.spellsId != undefined) {
            se.wi(self.spellsId, 1);
        }
        if (self.lock != undefined) {
            se.wi(self.lock, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_lock_response"] = { en: _encode_cs_spellsRes_lock_response, de: _decode_cs_spellsRes_lock_response };
    var cs_spellsRes_make_request = (function () {
        function cs_spellsRes_make_request() {
        }
        return cs_spellsRes_make_request;
    }());
    Sproto.cs_spellsRes_make_request = cs_spellsRes_make_request;
    __reflect(cs_spellsRes_make_request.prototype, "Sproto.cs_spellsRes_make_request");
    function _decode_cs_spellsRes_make_request(d) {
        var o = new cs_spellsRes_make_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.makeType = d.ri();
                    break;
                case 1:
                    o.autoBuy = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_make_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.makeType != undefined) {
            se.wi(self.makeType, 0);
        }
        if (self.autoBuy != undefined) {
            se.wi(self.autoBuy, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_make_request"] = { en: _encode_cs_spellsRes_make_request, de: _decode_cs_spellsRes_make_request };
    var cs_spellsRes_make_response = (function () {
        function cs_spellsRes_make_response() {
        }
        return cs_spellsRes_make_response;
    }());
    Sproto.cs_spellsRes_make_response = cs_spellsRes_make_response;
    __reflect(cs_spellsRes_make_response.prototype, "Sproto.cs_spellsRes_make_response");
    function _decode_cs_spellsRes_make_response(d) {
        var o = new cs_spellsRes_make_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.spellsId = d.ri();
                    break;
                case 2:
                    o.spellsNo = d.ri();
                    break;
                case 3:
                    o.num = d.ri();
                    break;
                case 4:
                    o.perfectNum = d.ri();
                    break;
                case 5:
                    o.skillList = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_make_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 6);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.spellsId != undefined) {
            se.wi(self.spellsId, 1);
        }
        if (self.spellsNo != undefined) {
            se.wi(self.spellsNo, 2);
        }
        if (self.num != undefined) {
            se.wi(self.num, 3);
        }
        if (self.perfectNum != undefined) {
            se.wi(self.perfectNum, 4);
        }
        if (self.skillList != undefined) {
            se.wia(self.skillList, 5);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_make_response"] = { en: _encode_cs_spellsRes_make_response, de: _decode_cs_spellsRes_make_response };
    var cs_spellsRes_smelt_request = (function () {
        function cs_spellsRes_smelt_request() {
        }
        return cs_spellsRes_smelt_request;
    }());
    Sproto.cs_spellsRes_smelt_request = cs_spellsRes_smelt_request;
    __reflect(cs_spellsRes_smelt_request.prototype, "Sproto.cs_spellsRes_smelt_request");
    function _decode_cs_spellsRes_smelt_request(d) {
        var o = new cs_spellsRes_smelt_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.spellsIdList = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_smelt_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.spellsIdList != undefined) {
            se.wia(self.spellsIdList, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_smelt_request"] = { en: _encode_cs_spellsRes_smelt_request, de: _decode_cs_spellsRes_smelt_request };
    var cs_spellsRes_smelt_response = (function () {
        function cs_spellsRes_smelt_response() {
        }
        return cs_spellsRes_smelt_response;
    }());
    Sproto.cs_spellsRes_smelt_response = cs_spellsRes_smelt_response;
    __reflect(cs_spellsRes_smelt_response.prototype, "Sproto.cs_spellsRes_smelt_response");
    function _decode_cs_spellsRes_smelt_response(d) {
        var o = new cs_spellsRes_smelt_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.spellsIdList = d.ria();
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
    function _encode_cs_spellsRes_smelt_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.spellsIdList != undefined) {
            se.wia(self.spellsIdList, 0);
        }
        if (self.num != undefined) {
            se.wi(self.num, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_smelt_response"] = { en: _encode_cs_spellsRes_smelt_response, de: _decode_cs_spellsRes_smelt_response };
    var cs_spellsRes_up_lv_request = (function () {
        function cs_spellsRes_up_lv_request() {
        }
        return cs_spellsRes_up_lv_request;
    }());
    Sproto.cs_spellsRes_up_lv_request = cs_spellsRes_up_lv_request;
    __reflect(cs_spellsRes_up_lv_request.prototype, "Sproto.cs_spellsRes_up_lv_request");
    function _decode_cs_spellsRes_up_lv_request(d) {
        var o = new cs_spellsRes_up_lv_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.pos = d.ri();
                    break;
                case 1:
                    o.autoBuy = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_up_lv_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.pos != undefined) {
            se.wi(self.pos, 0);
        }
        if (self.autoBuy != undefined) {
            se.wi(self.autoBuy, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_up_lv_request"] = { en: _encode_cs_spellsRes_up_lv_request, de: _decode_cs_spellsRes_up_lv_request };
    var cs_spellsRes_up_lv_response = (function () {
        function cs_spellsRes_up_lv_response() {
        }
        return cs_spellsRes_up_lv_response;
    }());
    Sproto.cs_spellsRes_up_lv_response = cs_spellsRes_up_lv_response;
    __reflect(cs_spellsRes_up_lv_response.prototype, "Sproto.cs_spellsRes_up_lv_response");
    function _decode_cs_spellsRes_up_lv_response(d) {
        var o = new cs_spellsRes_up_lv_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.pos = d.ri();
                    break;
                case 2:
                    o.lv = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_up_lv_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.pos != undefined) {
            se.wi(self.pos, 1);
        }
        if (self.lv != undefined) {
            se.wi(self.lv, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_up_lv_response"] = { en: _encode_cs_spellsRes_up_lv_response, de: _decode_cs_spellsRes_up_lv_response };
    var cs_spellsRes_use_request = (function () {
        function cs_spellsRes_use_request() {
        }
        return cs_spellsRes_use_request;
    }());
    Sproto.cs_spellsRes_use_request = cs_spellsRes_use_request;
    __reflect(cs_spellsRes_use_request.prototype, "Sproto.cs_spellsRes_use_request");
    function _decode_cs_spellsRes_use_request(d) {
        var o = new cs_spellsRes_use_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.pos = d.ri();
                    break;
                case 1:
                    o.spellsId = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_use_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.pos != undefined) {
            se.wi(self.pos, 0);
        }
        if (self.spellsId != undefined) {
            se.wi(self.spellsId, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_use_request"] = { en: _encode_cs_spellsRes_use_request, de: _decode_cs_spellsRes_use_request };
    var cs_spellsRes_use_response = (function () {
        function cs_spellsRes_use_response() {
        }
        return cs_spellsRes_use_response;
    }());
    Sproto.cs_spellsRes_use_response = cs_spellsRes_use_response;
    __reflect(cs_spellsRes_use_response.prototype, "Sproto.cs_spellsRes_use_response");
    function _decode_cs_spellsRes_use_response(d) {
        var o = new cs_spellsRes_use_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ret = d.rb();
                    break;
                case 1:
                    o.pos = d.ri();
                    break;
                case 2:
                    o.useSpellsNo = d.ri();
                    break;
                case 3:
                    o.spellsId = d.ri();
                    break;
                case 4:
                    o.spellsNo = d.ri();
                    break;
                case 5:
                    o.useSkillList = d.ria();
                    break;
                case 6:
                    o.oldSkillList = d.ria();
                    break;
                case 7:
                    o.lock = d.ri();
                    break;
                case 8:
                    o.num = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_spellsRes_use_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 9);
        if (self.ret != undefined) {
            se.wb(self.ret, 0);
        }
        if (self.pos != undefined) {
            se.wi(self.pos, 1);
        }
        if (self.useSpellsNo != undefined) {
            se.wi(self.useSpellsNo, 2);
        }
        if (self.spellsId != undefined) {
            se.wi(self.spellsId, 3);
        }
        if (self.spellsNo != undefined) {
            se.wi(self.spellsNo, 4);
        }
        if (self.useSkillList != undefined) {
            se.wia(self.useSkillList, 5);
        }
        if (self.oldSkillList != undefined) {
            se.wia(self.oldSkillList, 6);
        }
        if (self.lock != undefined) {
            se.wi(self.lock, 7);
        }
        if (self.num != undefined) {
            se.wi(self.num, 8);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_spellsRes_use_response"] = { en: _encode_cs_spellsRes_use_response, de: _decode_cs_spellsRes_use_response };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=spellsRes_c2s.js.map