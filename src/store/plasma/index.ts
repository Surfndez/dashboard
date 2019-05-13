/**
 * @module dpos-dashboard.gateway
 */

import { getStoreBuilder } from "vuex-typex"

import * as actions from "./actions"
import { PlasmaState, HasPlasmaState } from "./types";
import { Client } from "loom-js";
import BN from "bn.js"
import { createDefaultClient } from "loom-js/dist/helpers";
import { TokenSymbol } from "../ethereum/types";
import MigratedZBGCardJSON from "@/contracts/MigratedZBGCard.json"
import * as getters from "./getters"
import { getCachedEvents } from '../dpos-old/getters';

const initialState: PlasmaState = {
    // not state but...
    client: null,
    balances: {
        [TokenSymbol.LOOM]: new BN("0"),
        [TokenSymbol.ETH]: new BN("0"),
        [TokenSymbol.BNB]: new BN("0"),
    },
    cardInstance: null,
}

const builder = getStoreBuilder<HasPlasmaState>().module("plasma", initialState)
const stateGetter = builder.state()




export const ethereumModule = {
    get state() { return stateGetter() },

    // Getters
    getCardInstance: builder.read(getters.getCardInstance),

    // actions
    updateBalance: builder.dispatch(actions.updateBalance),
    approve: builder.dispatch(actions.approve),
    transfer: builder.dispatch(actions.transferTokens),

}

// if (state.cardInstance) return
// let cardNetwork
// let cardInstance
// cardNetwork = CardJSON.networks[state.loomNetwork]
// cardInstance = new state.web3.eth.Contract(CardJSON.abi, cardNetwork.address)
// commit('updateState', { cardNetwork, cardInstance })

function initCardInstance() {
    if (!getCardInstance) {
        
    } 
}

function createClient() {

}