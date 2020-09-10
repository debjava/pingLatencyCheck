import * as ping from "ping";
import {PingLatencyService} from "./ping.latency.service";

export class Test {

    public async check1(): Promise<void> {
        const hostIp = "10.60.144.181"; // For positive Case
        // const hostIp = "143.166.135.105"; // For Negative Case
        const latencyService = new PingLatencyService();
        const latency = await latencyService.getLatency(hostIp);
        console.log("==============================================");
        console.log("Latency: ", latency);
        console.log("==============================================");
    }

}

const test = new Test();
test.check1();
