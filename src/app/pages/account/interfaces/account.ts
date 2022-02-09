export interface Account {
    accountId: number;
    username: string;
    fullName: string;
    accountType: number;
    loginFailureCount: number;
    lastLoginTime: Date;
    createdTime: Date;
    status: number;
}