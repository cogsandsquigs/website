/*
Twob is *potentially* a way to describe
an identity or shit idfk. Whatever.
*/

import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import * as ed from '@noble/ed25519';
import { createHash } from "crypto"

type TwobData = {
    version: number // version being used
    pubkey: string // hex encoded pubkey
    uid: string // hex encoded sha-256 hash of pubkey
    username?: string // any url-safe string of characters
}

async function data(): Promise<TwobData> {
    const seed = await bip39.mnemonicToSeed(bip39.generateMnemonic(wordlist))
    const pubkey = await ed.getPublicKey(seed.slice(0, 32))
    const uid = new Uint8Array(await createHash("sha256").update(pubkey).digest())

    return {
        version: 0,
        pubkey: ed.utils.bytesToHex(pubkey),
        uid: ed.utils.bytesToHex(uid),
        username: "test",
    }
}

export async function get() {
    const body = await data();

    const headers = {
        "Cache-Control": "max-age=0, s-maxage=3600",
        "Content-Type": "application/json",
    };

    return {
        headers,
        body
    }
}