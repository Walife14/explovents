// INTERFACE FOR SPECIFIC EVENT WITH THE DATE
export interface IEventDate {
    id: number;
    created_at: Date;
    date: string; // e.g. "2025-04-22"
    event_id: number;
    tickets_available: number;
    tickets_sold: number;
}