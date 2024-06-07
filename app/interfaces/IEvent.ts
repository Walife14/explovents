type EventType = 'Boat Party' | 'Pool Party' | 'Beach Party' | 'Other Party'

export interface IEvent {
    id: number;
    address: string;
    created_at: Date;
    description: string;
    dress_code: string;
    event_images: string[];
    event_type: EventType;
    location: string;
    title: string;
    updated_at: Date | null;
    banner_image: string;
}