// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class member_data {
		public dbid: number; // tag 0
		public power: number; // tag 1
		public name: string; // tag 2
		public level: number; // tag 3
		public job: number; // tag 4
		public sex: number; // tag 5
	}

	function _decode_member_data(d: SprotoTypeDeserialize) {
		let o = new member_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dbid = d.ri ();
				break;
			case 1:
				o.power = d.ri ();
				break;
			case 2:
				o.name = d.rs ();
				break;
			case 3:
				o.level = d.ri ();
				break;
			case 4:
				o.job = d.ri ();
				break;
			case 5:
				o.sex = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_member_data(self: member_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.dbid != undefined) {
			se.wi (self.dbid, 0);
		}

		if (self.power != undefined) {
			se.wi (self.power, 1);
		}

		if (self.name != undefined) {
			se.ws (self.name, 2);
		}

		if (self.level != undefined) {
			se.wi (self.level, 3);
		}

		if (self.job != undefined) {
			se.wi (self.job, 4);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["member_data"] = {en: _encode_member_data, de: _decode_member_data}
	export class sc_team_info_request {
		public members: member_data[]; // tag 0
		public leaderid: number; // tag 1
		public raidtype: number; // tag 2
		public level: number; // tag 3
		public needpower: number; // tag 4
	}

	function _decode_sc_team_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_team_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.members = d.roa("member_data");
				break;
			case 1:
				o.leaderid = d.ri ();
				break;
			case 2:
				o.raidtype = d.ri ();
				break;
			case 3:
				o.level = d.ri ();
				break;
			case 4:
				o.needpower = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_team_info_request(self: sc_team_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.members != undefined) {
			se.woa ("member_data", self.members, 0);
		}

		if (self.leaderid != undefined) {
			se.wi (self.leaderid, 1);
		}

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 2);
		}

		if (self.level != undefined) {
			se.wi (self.level, 3);
		}

		if (self.needpower != undefined) {
			se.wi (self.needpower, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_team_info_request"] = {en: _encode_sc_team_info_request, de: _decode_sc_team_info_request}
	export class sc_team_list_request {
		public teamlist: team_data[]; // tag 0
		public raidtype: number; // tag 1
		public level: number; // tag 2
	}

	function _decode_sc_team_list_request(d: SprotoTypeDeserialize) {
		let o = new sc_team_list_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.teamlist = d.roa("team_data");
				break;
			case 1:
				o.raidtype = d.ri ();
				break;
			case 2:
				o.level = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_team_list_request(self: sc_team_list_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.teamlist != undefined) {
			se.woa ("team_data", self.teamlist, 0);
		}

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 1);
		}

		if (self.level != undefined) {
			se.wi (self.level, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_team_list_request"] = {en: _encode_sc_team_list_request, de: _decode_sc_team_list_request}
	export class sc_team_one_request {
		public members: member_data[]; // tag 0
		public leaderid: number; // tag 1
		public raidtype: number; // tag 2
		public level: number; // tag 3
		public needpower: number; // tag 4
	}

	function _decode_sc_team_one_request(d: SprotoTypeDeserialize) {
		let o = new sc_team_one_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.members = d.roa("member_data");
				break;
			case 1:
				o.leaderid = d.ri ();
				break;
			case 2:
				o.raidtype = d.ri ();
				break;
			case 3:
				o.level = d.ri ();
				break;
			case 4:
				o.needpower = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_team_one_request(self: sc_team_one_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.members != undefined) {
			se.woa ("member_data", self.members, 0);
		}

		if (self.leaderid != undefined) {
			se.wi (self.leaderid, 1);
		}

		if (self.raidtype != undefined) {
			se.wi (self.raidtype, 2);
		}

		if (self.level != undefined) {
			se.wi (self.level, 3);
		}

		if (self.needpower != undefined) {
			se.wi (self.needpower, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_team_one_request"] = {en: _encode_sc_team_one_request, de: _decode_sc_team_one_request}
	export class team_data {
		public leaderid: number; // tag 0
		public count: number; // tag 1
		public members: member_data[]; // tag 2
		public needpower: number; // tag 3
	}

	function _decode_team_data(d: SprotoTypeDeserialize) {
		let o = new team_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.leaderid = d.ri ();
				break;
			case 1:
				o.count = d.ri ();
				break;
			case 2:
				o.members = d.roa("member_data");
				break;
			case 3:
				o.needpower = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_team_data(self: team_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.leaderid != undefined) {
			se.wi (self.leaderid, 0);
		}

		if (self.count != undefined) {
			se.wi (self.count, 1);
		}

		if (self.members != undefined) {
			se.woa ("member_data", self.members, 2);
		}

		if (self.needpower != undefined) {
			se.wi (self.needpower, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["team_data"] = {en: _encode_team_data, de: _decode_team_data}
}

