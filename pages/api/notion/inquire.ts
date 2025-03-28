import { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const pageId = '1c41d90915dd8074a53ec9ed9b48433f'; // URL 말고, Notion pageId만
    const notion = new NotionAPI();

    try {
        const data = await notion.getPage(pageId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch page from Notion' });
    }
}