// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var sc_skill_all_upgrade_result_request = (function () {
        function sc_skill_all_upgrade_result_request() {
        }
        return sc_skill_all_upgrade_result_request;
    }());
    Sproto.sc_skill_all_upgrade_result_request = sc_skill_all_upgrade_result_request;
    __reflect(sc_skill_all_upgrade_result_request.prototype, "Sproto.sc_skill_all_upgrade_result_request");
    function _decode_sc_skill_all_upgrade_result_request(d) {
        var o = new sc_skill_all_upgrade_result_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.level = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_skill_all_upgrade_result_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.level != undefined) {
            se.wia(self.level, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_skill_all_upgrade_result_request"] = { en: _encode_sc_skill_all_upgrade_result_request, de: _decode_sc_skill_all_upgrade_result_request };
    var sc_skill_upgrade_result_request = (function () {
        function sc_skill_upgrade_result_request() {
        }
        return sc_skill_upgrade_result_request;
    }());
    Sproto.sc_skill_upgrade_result_request = sc_skill_upgrade_result_request;
    __reflect(sc_skill_upgrade_result_request.prototype, "Sproto.sc_skill_upgrade_result_request");
    function _decode_sc_skill_upgrade_result_request(d) {
        var o = new sc_skill_upgrade_result_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.skillID = d.ri();
                    break;
                case 1:
                    o.level = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_skill_upgrade_result_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.skillID != undefined) {
            se.wi(self.skillID, 0);
        }
        if (self.level != undefined) {
            se.wi(self.level, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_skill_upgrade_result_request"] = { en: _encode_sc_skill_upgrade_result_request, de: _decode_sc_skill_upgrade_result_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=skill_s2c.js.map