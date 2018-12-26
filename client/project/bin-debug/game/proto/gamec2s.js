// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var CreateActor_request = (function () {
        function CreateActor_request() {
        }
        return CreateActor_request;
    }());
    Sproto.CreateActor_request = CreateActor_request;
    __reflect(CreateActor_request.prototype, "Sproto.CreateActor_request");
    function _decode_CreateActor_request(d) {
        var o = new CreateActor_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.actorname = d.rs();
                    break;
                case 1:
                    o.sex = d.ri();
                    break;
                case 2:
                    o.job = d.ri();
                    break;
                case 3:
                    o.icon = d.ri();
                    break;
                case 4:
                    o.pf = d.rs();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_CreateActor_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 5);
        if (self.actorname != undefined) {
            se.ws(self.actorname, 0);
        }
        if (self.sex != undefined) {
            se.wi(self.sex, 1);
        }
        if (self.job != undefined) {
            se.wi(self.job, 2);
        }
        if (self.icon != undefined) {
            se.wi(self.icon, 3);
        }
        if (self.pf != undefined) {
            se.ws(self.pf, 4);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["CreateActor_request"] = { en: _encode_CreateActor_request, de: _decode_CreateActor_request };
    var CreateActor_response = (function () {
        function CreateActor_response() {
        }
        return CreateActor_response;
    }());
    Sproto.CreateActor_response = CreateActor_response;
    __reflect(CreateActor_response.prototype, "Sproto.CreateActor_response");
    function _decode_CreateActor_response(d) {
        var o = new CreateActor_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.result = d.ri();
                    break;
                case 1:
                    o.actorid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_CreateActor_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.result != undefined) {
            se.wi(self.result, 0);
        }
        if (self.actorid != undefined) {
            se.wi(self.actorid, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["CreateActor_response"] = { en: _encode_CreateActor_response, de: _decode_CreateActor_response };
    var EnterGame_request = (function () {
        function EnterGame_request() {
        }
        return EnterGame_request;
    }());
    Sproto.EnterGame_request = EnterGame_request;
    __reflect(EnterGame_request.prototype, "Sproto.EnterGame_request");
    function _decode_EnterGame_request(d) {
        var o = new EnterGame_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.actorid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_EnterGame_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.actorid != undefined) {
            se.wi(self.actorid, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["EnterGame_request"] = { en: _encode_EnterGame_request, de: _decode_EnterGame_request };
    var EnterGame_response = (function () {
        function EnterGame_response() {
        }
        return EnterGame_response;
    }());
    Sproto.EnterGame_response = EnterGame_response;
    __reflect(EnterGame_response.prototype, "Sproto.EnterGame_response");
    function _decode_EnterGame_response(d) {
        var o = new EnterGame_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.result = d.ri();
                    break;
                case 1:
                    o.QQ = d.rs();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_EnterGame_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.result != undefined) {
            se.wi(self.result, 0);
        }
        if (self.QQ != undefined) {
            se.ws(self.QQ, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["EnterGame_response"] = { en: _encode_EnterGame_response, de: _decode_EnterGame_response };
    var QueryList_request = (function () {
        function QueryList_request() {
        }
        return QueryList_request;
    }());
    Sproto.QueryList_request = QueryList_request;
    __reflect(QueryList_request.prototype, "Sproto.QueryList_request");
    function _decode_QueryList_request(d) {
        var o = new QueryList_request;
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
    function _encode_QueryList_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["QueryList_request"] = { en: _encode_QueryList_request, de: _decode_QueryList_request };
    var QueryList_response = (function () {
        function QueryList_response() {
        }
        return QueryList_response;
    }());
    Sproto.QueryList_response = QueryList_response;
    __reflect(QueryList_response.prototype, "Sproto.QueryList_response");
    function _decode_QueryList_response(d) {
        var o = new QueryList_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.code = d.rb();
                    break;
                case 1:
                    o.actorid = d.ri();
                    break;
                case 2:
                    o.actorlist = d.roa("actorlist");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_QueryList_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 3);
        if (self.code != undefined) {
            se.wb(self.code, 0);
        }
        if (self.actorid != undefined) {
            se.wi(self.actorid, 1);
        }
        if (self.actorlist != undefined) {
            se.woa("actorlist", self.actorlist, 2);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["QueryList_response"] = { en: _encode_QueryList_response, de: _decode_QueryList_response };
    var RandName_request = (function () {
        function RandName_request() {
        }
        return RandName_request;
    }());
    Sproto.RandName_request = RandName_request;
    __reflect(RandName_request.prototype, "Sproto.RandName_request");
    function _decode_RandName_request(d) {
        var o = new RandName_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.sex = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_RandName_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.sex != undefined) {
            se.wi(self.sex, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["RandName_request"] = { en: _encode_RandName_request, de: _decode_RandName_request };
    var RandName_response = (function () {
        function RandName_response() {
        }
        return RandName_response;
    }());
    Sproto.RandName_response = RandName_response;
    __reflect(RandName_response.prototype, "Sproto.RandName_response");
    function _decode_RandName_response(d) {
        var o = new RandName_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.result = d.ri();
                    break;
                case 1:
                    o.actorname = d.rs();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_RandName_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.result != undefined) {
            se.wi(self.result, 0);
        }
        if (self.actorname != undefined) {
            se.ws(self.actorname, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["RandName_response"] = { en: _encode_RandName_response, de: _decode_RandName_response };
    var actorlist = (function () {
        function actorlist() {
        }
        return actorlist;
    }());
    Sproto.actorlist = actorlist;
    __reflect(actorlist.prototype, "Sproto.actorlist");
    function _decode_actorlist(d) {
        var o = new actorlist;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.dbid = d.ri();
                    break;
                case 1:
                    o.serverindex = d.ri();
                    break;
                case 2:
                    o.actorname = d.rs();
                    break;
                case 3:
                    o.job = d.ri();
                    break;
                case 4:
                    o.sex = d.ri();
                    break;
                case 5:
                    o.level = d.ri();
                    break;
                case 6:
                    o.zhuansheng_lv = d.ri();
                    break;
                case 7:
                    o.totalpower = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_actorlist(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 8);
        if (self.dbid != undefined) {
            se.wi(self.dbid, 0);
        }
        if (self.serverindex != undefined) {
            se.wi(self.serverindex, 1);
        }
        if (self.actorname != undefined) {
            se.ws(self.actorname, 2);
        }
        if (self.job != undefined) {
            se.wi(self.job, 3);
        }
        if (self.sex != undefined) {
            se.wi(self.sex, 4);
        }
        if (self.level != undefined) {
            se.wi(self.level, 5);
        }
        if (self.zhuansheng_lv != undefined) {
            se.wi(self.zhuansheng_lv, 6);
        }
        if (self.totalpower != undefined) {
            se.wi(self.totalpower, 7);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["actorlist"] = { en: _encode_actorlist, de: _decode_actorlist };
    var checkAccount_request = (function () {
        function checkAccount_request() {
        }
        return checkAccount_request;
    }());
    Sproto.checkAccount_request = checkAccount_request;
    __reflect(checkAccount_request.prototype, "Sproto.checkAccount_request");
    function _decode_checkAccount_request(d) {
        var o = new checkAccount_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.accountname = d.rs();
                    break;
                case 1:
                    o.password = d.rs();
                    break;
                case 2:
                    o.platformuid = d.rs();
                    break;
                case 3:
                    o.token = d.rs();
                    break;
                case 4:
                    o.serverid = d.ri();
                    break;
                case 5:
                    o.lid = d.rs();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_checkAccount_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 6);
        if (self.accountname != undefined) {
            se.ws(self.accountname, 0);
        }
        if (self.password != undefined) {
            se.ws(self.password, 1);
        }
        if (self.platformuid != undefined) {
            se.ws(self.platformuid, 2);
        }
        if (self.token != undefined) {
            se.ws(self.token, 3);
        }
        if (self.serverid != undefined) {
            se.wi(self.serverid, 4);
        }
        if (self.lid != undefined) {
            se.ws(self.lid, 5);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["checkAccount_request"] = { en: _encode_checkAccount_request, de: _decode_checkAccount_request };
    var checkAccount_response = (function () {
        function checkAccount_response() {
        }
        return checkAccount_response;
    }());
    Sproto.checkAccount_response = checkAccount_response;
    __reflect(checkAccount_response.prototype, "Sproto.checkAccount_response");
    function _decode_checkAccount_response(d) {
        var o = new checkAccount_response;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.result = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_checkAccount_response(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.result != undefined) {
            se.wi(self.result, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["checkAccount_response"] = { en: _encode_checkAccount_response, de: _decode_checkAccount_response };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=gamec2s.js.map