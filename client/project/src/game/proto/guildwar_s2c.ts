// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class guildwar_guard_info {
		public name: string; // tag 0
		public job: number; // tag 1
		public sex: number; // tag 2
		public serverId: number; // tag 3
		public guildName: string; // tag 4
	}

	function _decode_guildwar_guard_info(d: SprotoTypeDeserialize) {
		let o = new guildwar_guard_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.job = d.ri ();
				break;
			case 2:
				o.sex = d.ri ();
				break;
			case 3:
				o.serverId = d.ri ();
				break;
			case 4:
				o.guildName = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildwar_guard_info(self: guildwar_guard_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.job != undefined) {
			se.wi (self.job, 1);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 2);
		}

		if (self.serverId != undefined) {
			se.wi (self.serverId, 3);
		}

		if (self.guildName != undefined) {
			se.ws (self.guildName, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildwar_guard_info"] = {en: _encode_guildwar_guard_info, de: _decode_guildwar_guard_info}
	export class guildwar_guild_info {
		public guildId: number; // tag 0
		public guildName: string; // tag 1
		public serverId: number; // tag 2
		public score: number; // tag 3
		public throughNum: number; // tag 4
		public rankData: guildwar_rank_data; // tag 5
		public leaderName: string; // tag 6
	}

	function _decode_guildwar_guild_info(d: SprotoTypeDeserialize) {
		let o = new guildwar_guild_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.guildId = d.ri ();
				break;
			case 1:
				o.guildName = d.rs ();
				break;
			case 2:
				o.serverId = d.ri ();
				break;
			case 3:
				o.score = d.ri ();
				break;
			case 4:
				o.throughNum = d.ri ();
				break;
			case 5:
				o.rankData = d.ro("guildwar_rank_data");
				break;
			case 6:
				o.leaderName = d.rs ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildwar_guild_info(self: guildwar_guild_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 7);

		if (self.guildId != undefined) {
			se.wi (self.guildId, 0);
		}

		if (self.guildName != undefined) {
			se.ws (self.guildName, 1);
		}

		if (self.serverId != undefined) {
			se.wi (self.serverId, 2);
		}

		if (self.score != undefined) {
			se.wi (self.score, 3);
		}

		if (self.throughNum != undefined) {
			se.wi (self.throughNum, 4);
		}

		if (self.rankData != undefined) {
			se.wo ("guildwar_rank_data", self.rankData, 5);
		}

		if (self.leaderName != undefined) {
			se.ws (self.leaderName, 6);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildwar_guild_info"] = {en: _encode_guildwar_guild_info, de: _decode_guildwar_guild_info}
	export class guildwar_king_data {
		public bossid: number; // tag 0
		public reborntime: number; // tag 1
	}

	function _decode_guildwar_king_data(d: SprotoTypeDeserialize) {
		let o = new guildwar_king_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.bossid = d.ri ();
				break;
			case 1:
				o.reborntime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildwar_king_data(self: guildwar_king_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.bossid != undefined) {
			se.wi (self.bossid, 0);
		}

		if (self.reborntime != undefined) {
			se.wi (self.reborntime, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildwar_king_data"] = {en: _encode_guildwar_king_data, de: _decode_guildwar_king_data}
	export class guildwar_player_data {
		public dbid: number; // tag 0
		public name: string; // tag 1
		public job: number; // tag 2
		public sex: number; // tag 3
		public serverId: number; // tag 4
		public guildName: string; // tag 5
		public rankData: guildwar_rank_data; // tag 6
	}

	function _decode_guildwar_player_data(d: SprotoTypeDeserialize) {
		let o = new guildwar_player_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.dbid = d.ri ();
				break;
			case 1:
				o.name = d.rs ();
				break;
			case 2:
				o.job = d.ri ();
				break;
			case 3:
				o.sex = d.ri ();
				break;
			case 4:
				o.serverId = d.ri ();
				break;
			case 5:
				o.guildName = d.rs ();
				break;
			case 6:
				o.rankData = d.ro("guildwar_rank_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildwar_player_data(self: guildwar_player_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 7);

		if (self.dbid != undefined) {
			se.wi (self.dbid, 0);
		}

		if (self.name != undefined) {
			se.ws (self.name, 1);
		}

		if (self.job != undefined) {
			se.wi (self.job, 2);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 3);
		}

		if (self.serverId != undefined) {
			se.wi (self.serverId, 4);
		}

		if (self.guildName != undefined) {
			se.ws (self.guildName, 5);
		}

		if (self.rankData != undefined) {
			se.wo ("guildwar_rank_data", self.rankData, 6);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildwar_player_data"] = {en: _encode_guildwar_player_data, de: _decode_guildwar_player_data}
	export class guildwar_rank_data {
		public injure: number; // tag 0
		public injureRank: number; // tag 1
		public holdtracks: number; // tag 2
		public holdtracksRank: number; // tag 3
		public score: number; // tag 4
		public scoreRank: number; // tag 5
		public kill: number; // tag 6
		public killRank: number; // tag 7
	}

	function _decode_guildwar_rank_data(d: SprotoTypeDeserialize) {
		let o = new guildwar_rank_data;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.injure = d.ri ();
				break;
			case 1:
				o.injureRank = d.ri ();
				break;
			case 2:
				o.holdtracks = d.ri ();
				break;
			case 3:
				o.holdtracksRank = d.ri ();
				break;
			case 4:
				o.score = d.ri ();
				break;
			case 5:
				o.scoreRank = d.ri ();
				break;
			case 6:
				o.kill = d.ri ();
				break;
			case 7:
				o.killRank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildwar_rank_data(self: guildwar_rank_data, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 8);

		if (self.injure != undefined) {
			se.wi (self.injure, 0);
		}

		if (self.injureRank != undefined) {
			se.wi (self.injureRank, 1);
		}

		if (self.holdtracks != undefined) {
			se.wi (self.holdtracks, 2);
		}

		if (self.holdtracksRank != undefined) {
			se.wi (self.holdtracksRank, 3);
		}

		if (self.score != undefined) {
			se.wi (self.score, 4);
		}

		if (self.scoreRank != undefined) {
			se.wi (self.scoreRank, 5);
		}

		if (self.kill != undefined) {
			se.wi (self.kill, 6);
		}

		if (self.killRank != undefined) {
			se.wi (self.killRank, 7);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildwar_rank_data"] = {en: _encode_guildwar_rank_data, de: _decode_guildwar_rank_data}
	export class guildwar_report_guilddetail {
		public rank: number; // tag 0
	}

	function _decode_guildwar_report_guilddetail(d: SprotoTypeDeserialize) {
		let o = new guildwar_report_guilddetail;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.rank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildwar_report_guilddetail(self: guildwar_report_guilddetail, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.rank != undefined) {
			se.wi (self.rank, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildwar_report_guilddetail"] = {en: _encode_guildwar_report_guilddetail, de: _decode_guildwar_report_guilddetail}
	export class guildwar_report_sharedata {
		public victory: string; // tag 0
		public serverid: number; // tag 1
	}

	function _decode_guildwar_report_sharedata(d: SprotoTypeDeserialize) {
		let o = new guildwar_report_sharedata;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.victory = d.rs ();
				break;
			case 1:
				o.serverid = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildwar_report_sharedata(self: guildwar_report_sharedata, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.victory != undefined) {
			se.ws (self.victory, 0);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildwar_report_sharedata"] = {en: _encode_guildwar_report_sharedata, de: _decode_guildwar_report_sharedata}
	export class sc_guildwar_all_guild_rank_info_request {
		public rankinfos: guildwar_guild_info[]; // tag 0
	}

	function _decode_sc_guildwar_all_guild_rank_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_all_guild_rank_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.rankinfos = d.roa("guildwar_guild_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_all_guild_rank_info_request(self: sc_guildwar_all_guild_rank_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.rankinfos != undefined) {
			se.woa ("guildwar_guild_info", self.rankinfos, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_all_guild_rank_info_request"] = {en: _encode_sc_guildwar_all_guild_rank_info_request, de: _decode_sc_guildwar_all_guild_rank_info_request}
	export class sc_guildwar_all_player_rank_info_request {
		public killrank: guildwar_player_data[]; // tag 0
		public injurerank: guildwar_player_data[]; // tag 1
		public scorerank: guildwar_player_data[]; // tag 2
	}

	function _decode_sc_guildwar_all_player_rank_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_all_player_rank_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.killrank = d.roa("guildwar_player_data");
				break;
			case 1:
				o.injurerank = d.roa("guildwar_player_data");
				break;
			case 2:
				o.scorerank = d.roa("guildwar_player_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_all_player_rank_info_request(self: sc_guildwar_all_player_rank_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.killrank != undefined) {
			se.woa ("guildwar_player_data", self.killrank, 0);
		}

		if (self.injurerank != undefined) {
			se.woa ("guildwar_player_data", self.injurerank, 1);
		}

		if (self.scorerank != undefined) {
			se.woa ("guildwar_player_data", self.scorerank, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_all_player_rank_info_request"] = {en: _encode_sc_guildwar_all_player_rank_info_request, de: _decode_sc_guildwar_all_player_rank_info_request}
	export class sc_guildwar_barrier_info_request {
		public barrierId: number; // tag 0
		public playerNum: number; // tag 1
	}

	function _decode_sc_guildwar_barrier_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_barrier_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.barrierId = d.ri ();
				break;
			case 1:
				o.playerNum = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_barrier_info_request(self: sc_guildwar_barrier_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.barrierId != undefined) {
			se.wi (self.barrierId, 0);
		}

		if (self.playerNum != undefined) {
			se.wi (self.playerNum, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_barrier_info_request"] = {en: _encode_sc_guildwar_barrier_info_request, de: _decode_sc_guildwar_barrier_info_request}
	export class sc_guildwar_boss_info_request {
		public barrierId: number; // tag 0
		public shield: number; // tag 1
		public hp: number; // tag 2
		public recovertime: number; // tag 3
	}

	function _decode_sc_guildwar_boss_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_boss_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.barrierId = d.ri ();
				break;
			case 1:
				o.shield = d.ri ();
				break;
			case 2:
				o.hp = d.ri ();
				break;
			case 3:
				o.recovertime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_boss_info_request(self: sc_guildwar_boss_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.barrierId != undefined) {
			se.wi (self.barrierId, 0);
		}

		if (self.shield != undefined) {
			se.wi (self.shield, 1);
		}

		if (self.hp != undefined) {
			se.wi (self.hp, 2);
		}

		if (self.recovertime != undefined) {
			se.wi (self.recovertime, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_boss_info_request"] = {en: _encode_sc_guildwar_boss_info_request, de: _decode_sc_guildwar_boss_info_request}
	export class sc_guildwar_enter_dragon_guild_request {
		public guildinfos: guildwar_guild_info[]; // tag 0
		public countdown: number; // tag 1
	}

	function _decode_sc_guildwar_enter_dragon_guild_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_enter_dragon_guild_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.guildinfos = d.roa("guildwar_guild_info");
				break;
			case 1:
				o.countdown = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_enter_dragon_guild_request(self: sc_guildwar_enter_dragon_guild_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.guildinfos != undefined) {
			se.woa ("guildwar_guild_info", self.guildinfos, 0);
		}

		if (self.countdown != undefined) {
			se.wi (self.countdown, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_enter_dragon_guild_request"] = {en: _encode_sc_guildwar_enter_dragon_guild_request, de: _decode_sc_guildwar_enter_dragon_guild_request}
	export class sc_guildwar_enter_war_guild_request {
		public championGuild: guildwar_guild_info; // tag 0
		public guildinfos: guildwar_guild_info[]; // tag 1
	}

	function _decode_sc_guildwar_enter_war_guild_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_enter_war_guild_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.championGuild = d.ro("guildwar_guild_info");
				break;
			case 1:
				o.guildinfos = d.roa("guildwar_guild_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_enter_war_guild_request(self: sc_guildwar_enter_war_guild_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.championGuild != undefined) {
			se.wo ("guildwar_guild_info", self.championGuild, 0);
		}

		if (self.guildinfos != undefined) {
			se.woa ("guildwar_guild_info", self.guildinfos, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_enter_war_guild_request"] = {en: _encode_sc_guildwar_enter_war_guild_request, de: _decode_sc_guildwar_enter_war_guild_request}
	export class sc_guildwar_four_king_info_request {
		public bossinfos: guildwar_king_data[]; // tag 0
	}

	function _decode_sc_guildwar_four_king_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_four_king_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.bossinfos = d.roa("guildwar_king_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_four_king_info_request(self: sc_guildwar_four_king_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.bossinfos != undefined) {
			se.woa ("guildwar_king_data", self.bossinfos, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_four_king_info_request"] = {en: _encode_sc_guildwar_four_king_info_request, de: _decode_sc_guildwar_four_king_info_request}
	export class sc_guildwar_guard_info_request {
		public guardtype: number; // tag 0
		public holdtime: number; // tag 1
		public resistNum: number; // tag 2
		public hp: number; // tag 3
		public guardinfos: guildwar_guard_info[]; // tag 4
		public ownerGuildId: number; // tag 5
	}

	function _decode_sc_guildwar_guard_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_guard_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.guardtype = d.ri ();
				break;
			case 1:
				o.holdtime = d.ri ();
				break;
			case 2:
				o.resistNum = d.ri ();
				break;
			case 3:
				o.hp = d.ri ();
				break;
			case 4:
				o.guardinfos = d.roa("guildwar_guard_info");
				break;
			case 5:
				o.ownerGuildId = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_guard_info_request(self: sc_guildwar_guard_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.guardtype != undefined) {
			se.wi (self.guardtype, 0);
		}

		if (self.holdtime != undefined) {
			se.wi (self.holdtime, 1);
		}

		if (self.resistNum != undefined) {
			se.wi (self.resistNum, 2);
		}

		if (self.hp != undefined) {
			se.wi (self.hp, 3);
		}

		if (self.guardinfos != undefined) {
			se.woa ("guildwar_guard_info", self.guardinfos, 4);
		}

		if (self.ownerGuildId != undefined) {
			se.wi (self.ownerGuildId, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_guard_info_request"] = {en: _encode_sc_guildwar_guard_info_request, de: _decode_sc_guildwar_guard_info_request}
	export class sc_guildwar_guild_info_request {
		public barrierId: number; // tag 0
		public playerNum: number; // tag 1
		public throughNum: number; // tag 2
		public rankData: guildwar_rank_data; // tag 3
	}

	function _decode_sc_guildwar_guild_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_guild_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.barrierId = d.ri ();
				break;
			case 1:
				o.playerNum = d.ri ();
				break;
			case 2:
				o.throughNum = d.ri ();
				break;
			case 3:
				o.rankData = d.ro("guildwar_rank_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_guild_info_request(self: sc_guildwar_guild_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.barrierId != undefined) {
			se.wi (self.barrierId, 0);
		}

		if (self.playerNum != undefined) {
			se.wi (self.playerNum, 1);
		}

		if (self.throughNum != undefined) {
			se.wi (self.throughNum, 2);
		}

		if (self.rankData != undefined) {
			se.wo ("guildwar_rank_data", self.rankData, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_guild_info_request"] = {en: _encode_sc_guildwar_guild_info_request, de: _decode_sc_guildwar_guild_info_request}
	export class sc_guildwar_guild_rank_request {
		public barrierId: number; // tag 0
		public guildinfos: guildwar_guild_info[]; // tag 1
	}

	function _decode_sc_guildwar_guild_rank_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_guild_rank_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.barrierId = d.ri ();
				break;
			case 1:
				o.guildinfos = d.roa("guildwar_guild_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_guild_rank_request(self: sc_guildwar_guild_rank_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.barrierId != undefined) {
			se.wi (self.barrierId, 0);
		}

		if (self.guildinfos != undefined) {
			se.woa ("guildwar_guild_info", self.guildinfos, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_guild_rank_request"] = {en: _encode_sc_guildwar_guild_rank_request, de: _decode_sc_guildwar_guild_rank_request}
	export class sc_guildwar_myguild_global_info_request {
		public playerNum: number; // tag 0
		public score: number; // tag 1
		public scoreRank: number; // tag 2
	}

	function _decode_sc_guildwar_myguild_global_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_myguild_global_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerNum = d.ri ();
				break;
			case 1:
				o.score = d.ri ();
				break;
			case 2:
				o.scoreRank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_myguild_global_info_request(self: sc_guildwar_myguild_global_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.playerNum != undefined) {
			se.wi (self.playerNum, 0);
		}

		if (self.score != undefined) {
			se.wi (self.score, 1);
		}

		if (self.scoreRank != undefined) {
			se.wi (self.scoreRank, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_myguild_global_info_request"] = {en: _encode_sc_guildwar_myguild_global_info_request, de: _decode_sc_guildwar_myguild_global_info_request}
	export class sc_guildwar_player_global_info_request {
		public reborntime: number; // tag 0
		public score: number; // tag 1
		public scoreRank: number; // tag 2
		public kill: number; // tag 3
		public killRank: number; // tag 4
		public rewardMark: number; // tag 5
		public endtime: number; // tag 6
		public worldlevel: number; // tag 7
	}

	function _decode_sc_guildwar_player_global_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_player_global_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.reborntime = d.ri ();
				break;
			case 1:
				o.score = d.ri ();
				break;
			case 2:
				o.scoreRank = d.ri ();
				break;
			case 3:
				o.kill = d.ri ();
				break;
			case 4:
				o.killRank = d.ri ();
				break;
			case 5:
				o.rewardMark = d.ri ();
				break;
			case 6:
				o.endtime = d.ri ();
				break;
			case 7:
				o.worldlevel = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_player_global_info_request(self: sc_guildwar_player_global_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 8);

		if (self.reborntime != undefined) {
			se.wi (self.reborntime, 0);
		}

		if (self.score != undefined) {
			se.wi (self.score, 1);
		}

		if (self.scoreRank != undefined) {
			se.wi (self.scoreRank, 2);
		}

		if (self.kill != undefined) {
			se.wi (self.kill, 3);
		}

		if (self.killRank != undefined) {
			se.wi (self.killRank, 4);
		}

		if (self.rewardMark != undefined) {
			se.wi (self.rewardMark, 5);
		}

		if (self.endtime != undefined) {
			se.wi (self.endtime, 6);
		}

		if (self.worldlevel != undefined) {
			se.wi (self.worldlevel, 7);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_player_global_info_request"] = {en: _encode_sc_guildwar_player_global_info_request, de: _decode_sc_guildwar_player_global_info_request}
	export class sc_guildwar_player_info_request {
		public barrierId: number; // tag 0
		public through: boolean; // tag 1
		public reborntime: number; // tag 2
		public attacktime: number; // tag 3
		public rankData: guildwar_rank_data; // tag 4
	}

	function _decode_sc_guildwar_player_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_player_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.barrierId = d.ri ();
				break;
			case 1:
				o.through = d.rb ();
				break;
			case 2:
				o.reborntime = d.ri ();
				break;
			case 3:
				o.attacktime = d.ri ();
				break;
			case 4:
				o.rankData = d.ro("guildwar_rank_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_player_info_request(self: sc_guildwar_player_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.barrierId != undefined) {
			se.wi (self.barrierId, 0);
		}

		if (self.through != undefined) {
			se.wb (self.through, 1);
		}

		if (self.reborntime != undefined) {
			se.wi (self.reborntime, 2);
		}

		if (self.attacktime != undefined) {
			se.wi (self.attacktime, 3);
		}

		if (self.rankData != undefined) {
			se.wo ("guildwar_rank_data", self.rankData, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_player_info_request"] = {en: _encode_sc_guildwar_player_info_request, de: _decode_sc_guildwar_player_info_request}
	export class sc_guildwar_player_rank_request {
		public barrierId: number; // tag 0
		public rankInfos: guildwar_player_data[]; // tag 1
	}

	function _decode_sc_guildwar_player_rank_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_player_rank_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.barrierId = d.ri ();
				break;
			case 1:
				o.rankInfos = d.roa("guildwar_player_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_player_rank_request(self: sc_guildwar_player_rank_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.barrierId != undefined) {
			se.wi (self.barrierId, 0);
		}

		if (self.rankInfos != undefined) {
			se.woa ("guildwar_player_data", self.rankInfos, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_player_rank_request"] = {en: _encode_sc_guildwar_player_rank_request, de: _decode_sc_guildwar_player_rank_request}
	export class sc_guildwar_report_request {
		public guilddetail: guildwar_report_guilddetail; // tag 0
		public rewards: reward_data[]; // tag 1
		public auctionrewards: reward_data[]; // tag 2
		public sharedata: guildwar_report_sharedata; // tag 3
	}

	function _decode_sc_guildwar_report_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_report_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.guilddetail = d.ro("guildwar_report_guilddetail");
				break;
			case 1:
				o.rewards = d.roa("reward_data");
				break;
			case 2:
				o.auctionrewards = d.roa("reward_data");
				break;
			case 3:
				o.sharedata = d.ro("guildwar_report_sharedata");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_report_request(self: sc_guildwar_report_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.guilddetail != undefined) {
			se.wo ("guildwar_report_guilddetail", self.guilddetail, 0);
		}

		if (self.rewards != undefined) {
			se.woa ("reward_data", self.rewards, 1);
		}

		if (self.auctionrewards != undefined) {
			se.woa ("reward_data", self.auctionrewards, 2);
		}

		if (self.sharedata != undefined) {
			se.wo ("guildwar_report_sharedata", self.sharedata, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_report_request"] = {en: _encode_sc_guildwar_report_request, de: _decode_sc_guildwar_report_request}
	export class sc_guildwar_ultimate_attack_request {
		public countdown: number; // tag 0
	}

	function _decode_sc_guildwar_ultimate_attack_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildwar_ultimate_attack_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.countdown = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildwar_ultimate_attack_request(self: sc_guildwar_ultimate_attack_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.countdown != undefined) {
			se.wi (self.countdown, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildwar_ultimate_attack_request"] = {en: _encode_sc_guildwar_ultimate_attack_request, de: _decode_sc_guildwar_ultimate_attack_request}
}

