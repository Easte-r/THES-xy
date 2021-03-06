// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class cs_friend_add_blacklist_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_friend_add_blacklist_request(d: SprotoTypeDeserialize) {
		let o = new cs_friend_add_blacklist_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_add_blacklist_request(self: cs_friend_add_blacklist_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_add_blacklist_request"] = {en: _encode_cs_friend_add_blacklist_request, de: _decode_cs_friend_add_blacklist_request}
	export class cs_friend_add_follow_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_friend_add_follow_request(d: SprotoTypeDeserialize) {
		let o = new cs_friend_add_follow_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_add_follow_request(self: cs_friend_add_follow_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_add_follow_request"] = {en: _encode_cs_friend_add_follow_request, de: _decode_cs_friend_add_follow_request}
	export class cs_friend_add_follow_response {
		public ret: boolean; // tag 0
	}

	function _decode_cs_friend_add_follow_response(d: SprotoTypeDeserialize) {
		let o = new cs_friend_add_follow_response;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.ret = d.rb ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_add_follow_response(self: cs_friend_add_follow_response, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.ret != undefined) {
			se.wb (self.ret, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_add_follow_response"] = {en: _encode_cs_friend_add_follow_response, de: _decode_cs_friend_add_follow_response}
	export class cs_friend_del_blacklist_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_friend_del_blacklist_request(d: SprotoTypeDeserialize) {
		let o = new cs_friend_del_blacklist_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_del_blacklist_request(self: cs_friend_del_blacklist_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_del_blacklist_request"] = {en: _encode_cs_friend_del_blacklist_request, de: _decode_cs_friend_del_blacklist_request}
	export class cs_friend_del_follow_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_friend_del_follow_request(d: SprotoTypeDeserialize) {
		let o = new cs_friend_del_follow_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_del_follow_request(self: cs_friend_del_follow_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_del_follow_request"] = {en: _encode_cs_friend_del_follow_request, de: _decode_cs_friend_del_follow_request}
	export class cs_friend_follow_nominate_request {
	}

	function _decode_cs_friend_follow_nominate_request(d: SprotoTypeDeserialize) {
		let o = new cs_friend_follow_nominate_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_follow_nominate_request(self: cs_friend_follow_nominate_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 0);

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_follow_nominate_request"] = {en: _encode_cs_friend_follow_nominate_request, de: _decode_cs_friend_follow_nominate_request}
	export class cs_friend_gift_friendcoin_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_friend_gift_friendcoin_request(d: SprotoTypeDeserialize) {
		let o = new cs_friend_gift_friendcoin_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_gift_friendcoin_request(self: cs_friend_gift_friendcoin_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_gift_friendcoin_request"] = {en: _encode_cs_friend_gift_friendcoin_request, de: _decode_cs_friend_gift_friendcoin_request}
	export class cs_friend_receive_friendcoin_request {
		public targetid: number; // tag 0
	}

	function _decode_cs_friend_receive_friendcoin_request(d: SprotoTypeDeserialize) {
		let o = new cs_friend_receive_friendcoin_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.targetid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_cs_friend_receive_friendcoin_request(self: cs_friend_receive_friendcoin_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.targetid != undefined) {
			se.wi (self.targetid, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["cs_friend_receive_friendcoin_request"] = {en: _encode_cs_friend_receive_friendcoin_request, de: _decode_cs_friend_receive_friendcoin_request}
}

