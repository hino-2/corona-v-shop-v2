type LKState = {
	userInfo: User;
};

type User = {
	login: string;
	email: string;
	balance: number;
	firstName?: string;
	secondName?: string;
	_id?: string;
};

export type { LKState, User };
