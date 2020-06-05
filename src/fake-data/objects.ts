type User = {
    id: number,
    created_at: string
    updated_at: string,
    username: string,
    email: string
    status: string,
    rating: number
}

type Flow = {
    created_at: string
    created_by: User
    title: string
    description: string
    status: string
}


type Comment = {
    id: number,
    created_at: string
    created_by: User
    comment: string
    rating: number
    attachments: Attachment[]
}

type Tag = {
    id: number
    tag: string
}


type Attachment = {
    id: number
    created_at: string
    type: string
    url: string
    filesize: number
}

type Task = {
    id: number
    created_at: string
    created_by: User
    updated_at: string
    updated_by: User
    controlled_by: User
    controlled_at: string
    finished_at: User
    finished_by: string
    title: string
    descriptions: string
    status: string
    type_id: string
    rating: number
    address: string
    x: number
    y: number
    likes_count: number,
    views_count: number
    comments_count: number
    shares_count: number,
    flows: Flow[],
    comments: Comment[],
    tags: Tag[],
    attachments: Attachment[]
}






