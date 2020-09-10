import * as ping from "ping";

export class PingLatencyService {

    public async getLatency(hostOrIp: string): Promise<number> {
        const result = await ping.promise.probe(hostOrIp);
        const latency = result.avg;
        return (latency !== "unknown") ? Math.floor(parseFloat(latency)) : -1;
    }
}
