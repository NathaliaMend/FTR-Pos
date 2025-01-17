// Enums
// Serve para melhorar legibilidade

enum Profile {
    Admin = 1,
    Client = 2,
    Seller = 3
}

// let profile: number = 1
let profile: number = Profile.Admin // Ambas declaracoes entregam o numero 1, porém a segunda declaracao é mais legível, pois diz o que significa o numero 1