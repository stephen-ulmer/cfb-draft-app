import { db } from "lib/db";

async function main() {
    const user = await db.user.findFirst({
        where: {email: "stephen.ulmer16@gmail.com"},
        include: {
            leagues: true
        }

    })

    if (!user) {
        return;
    }

    db.league.upsert({
        where: {ownerId_name: {ownerId: user.id, name: "Stephen's League"}},
        update: {},
        create: {
            name: "Stephen's League",
            ownerId: user.id,
        }
    })

}
