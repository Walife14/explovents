type EventType = 'boat_party' | 'pool_party' | 'beach_party' | 'other_party'

export interface IEvent {
    id: number;
    address: string;
    created_at: Date;
    description: string;
    dress_code: string;
    event_images: string[];
    event_type: EventType;
    country: string;
    city: string;
    title: string;
    updated_at: Date | null;
    banner_image: string;
}