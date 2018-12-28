// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var luck_record = (function () {
        function luck_record() {
        }
        return luck_record;
    }());
    Sproto.luck_record = luck_record;
    __reflect(luck_record.prototype, "Sproto.luck_record");
    function _decode_luck_record(d) {
        var o = new luck_record;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.name = d.rs();
                    break;
                case 1:
                    o.reward = d.ro("reward_data");
                    break;
                case 2:
                    o.time = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_luck_record(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.name != undefined) {
            se.ws(self.name, 0);
        }
        if (self.reward != undefined) {
            se.wo("reward_data", self.reward, 1);
        }
        if (self.time != undefined) {
            se.wi(self.time, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["luck_record"] = { en: _encode_luck_record, de: _decode_luck_record };
    var sc_luck_info_request = (function () {
        function sc_luck_info_request() {
        }
        return sc_luck_info_request;
    }());
    Sproto.sc_luck_info_request = sc_luck_info_request;
    __reflect(sc_luck_info_request.prototype, "Sproto.sc_luck_info_request");
    function _decode_sc_luck_info_request(d) {
        var o = new sc_luck_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.counts = d.ria();
                    break;
                case 1:
                    o.records = d.roa("luck_record");
                    break;
                case 2:
                    o.tenNum = d.ri();
                    break;
                case 3:
                    o.lucky = d.ri();
                    break;
                case 4:
                    o.equipcounts = d.ria();
                    break;
                case 5:
                    o.equiplucky = d.ri();
                    break;
                case 6:
                    o.equiprecords = d.roa("luck_record");
                    break;
                case 7:
                    o.daylist = d.ria();
                    break;
                case 8:
                    o.equipdaylist = d.ria();
                    break;
                case 9:
                    o.round = d.ri();
                    break;
                case 10:
                    o.equipround = d.ri();
                    break;
                case 11:
                    o.totemscounts = d.ria();
                    break;
                case 12:
                    o.totemslucky = d.ri();
                    break;
                case 13:
                    o.totemsrecords = d.roa("luck_record");
                    break;
                case 14:
                    o.totemsdaylist = d.ria();
                    break;
                case 15:
                    o.totemsround = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_luck_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 16);
        if (self.counts != undefined) {
            se.wia(self.counts, 0);
        }
        if (self.records != undefined) {
            se.woa("luck_record", self.records, 1);
        }
        if (self.tenNum != undefined) {
            se.wi(self.tenNum, 2);
        }
        if (self.lucky != undefined) {
            se.wi(self.lucky, 3);
        }
        if (self.equipcounts != undefined) {
            se.wia(self.equipcounts, 4);
        }
        if (self.equiplucky != undefined) {
            se.wi(self.equiplucky, 5);
        }
        if (self.equiprecords != undefined) {
            se.woa("luck_record", self.equiprecords, 6);
        }
        if (self.daylist != undefined) {
            se.wia(self.daylist, 7);
        }
        if (self.equipdaylist != undefined) {
            se.wia(self.equipdaylist, 8);
        }
        if (self.round != undefined) {
            se.wi(self.round, 9);
        }
        if (self.equipround != undefined) {
            se.wi(self.equipround, 10);
        }
        if (self.totemscounts != undefined) {
            se.wia(self.totemscounts, 11);
        }
        if (self.totemslucky != undefined) {
            se.wi(self.totemslucky, 12);
        }
        if (self.totemsrecords != undefined) {
            se.woa("luck_record", self.totemsrecords, 13);
        }
        if (self.totemsdaylist != undefined) {
            se.wia(self.totemsdaylist, 14);
        }
        if (self.totemsround != undefined) {
            se.wi(self.totemsround, 15);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_luck_info_request"] = { en: _encode_sc_luck_info_request, de: _decode_sc_luck_info_request };
    var sc_luck_ret_request = (function () {
        function sc_luck_ret_request() {
        }
        return sc_luck_ret_request;
    }());
    Sproto.sc_luck_ret_request = sc_luck_ret_request;
    __reflect(sc_luck_ret_request.prototype, "Sproto.sc_luck_ret_request");
    function _decode_sc_luck_ret_request(d) {
        var o = new sc_luck_ret_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.type = d.ri();
                    break;
                case 1:
                    o.index = d.ri();
                    break;
                case 2:
                    o.rewards = d.roa("reward_data");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_luck_ret_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.type != undefined) {
            se.wi(self.type, 0);
        }
        if (self.index != undefined) {
            se.wi(self.index, 1);
        }
        if (self.rewards != undefined) {
            se.woa("reward_data", self.rewards, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_luck_ret_request"] = { en: _encode_sc_luck_ret_request, de: _decode_sc_luck_ret_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=luck_s2c.js.map