// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class sc_skill_all_upgrade_result_request {
		public level: number[]; // tag 0
	}

	function _decode_sc_skill_all_upgrade_result_request(d: SprotoTypeDeserialize) {
		let o = new sc_skill_all_upgrade_result_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.level = d.ria ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_skill_all_upgrade_result_request(self: sc_skill_all_upgrade_result_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.level != undefined) {
			se.wia (self.level, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_skill_all_upgrade_result_request"] = {en: _encode_sc_skill_all_upgrade_result_request, de: _decode_sc_skill_all_upgrade_result_request}
	export class sc_skill_upgrade_result_request {
		public skillID: number; // tag 0
		public level: number; // tag 1
	}

	function _decode_sc_skill_upgrade_result_request(d: SprotoTypeDeserialize) {
		let o = new sc_skill_upgrade_result_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.skillID = d.ri ();
				break;
			case 1:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_skill_upgrade_result_request(self: sc_skill_upgrade_result_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.skillID != undefined) {
			se.wi (self.skillID, 0);
		}

		if (self.level != undefined) {
			se.wi (self.level, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_skill_upgrade_result_request"] = {en: _encode_sc_skill_upgrade_result_request, de: _decode_sc_skill_upgrade_result_request}
}

