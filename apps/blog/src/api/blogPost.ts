import fs from 'fs';
import grayMatter from 'gray-matter';
import path from 'path';

export const blogPost = {
  find,
};

const FOLDER_PATH = 'content/blog';

type BlogPost = {
  date: string;
  description: string;
  // imageURL: string
  filePath: string;
  link: string;
  tags: Array<string>;
  title: string;
};

function find(fPath?: string): Array<BlogPost> {
  const folderPath = fPath || FOLDER_PATH;
  const folders = fs.readdirSync(path.join(folderPath));

  return folders.map((folder) => {
    const files = fs.readdirSync(path.join(folderPath, folder));

    const file = files.find((folderName) => folderName.indexOf('.mdx') > -1);

    if (!file) {
      throw new Error('Unexpected file');
    }

    const filePath = path.join(folderPath, folder, file);
    const link = `/${file.split('.mdx')[0]}`;

    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data } = grayMatter(markdownWithMeta);

    const blogPost: BlogPost = {
      date: data.date,
      description: data.description,
      filePath,
      // imageURL: data.imageURL,
      link,
      tags: data.tags,
      title: data.title,
    };

    return blogPost;
  });
}
