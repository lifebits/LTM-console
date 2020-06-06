export interface Task {
  id: number;
  created_at: string;
  created_by: User;
  updated_at: string;
  updated_by: User;
  controlled_by: User;
  controlled_at: string;
  finished_at: User;
  finished_by: string;
  title: string;
  descriptions: string;
  status: string;
  type_id: string;
  rating: number;
  address: string;
  x: number;
  y: number;
  likes_count: number;
  views_count: number;
  comments_count: number;
  shares_count: number;
  flows: Flow[];
  comments: Comment[];
  tags: Tag[];
  attachments: Attachment[];
}
