import { Box, Clock, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { marketingArticles } from "../Articles";


function Articles({enable = false}) {
  let navigate = useNavigate();
  
  return (
    <> 
      {marketingArticles.map((item, index) => (
        <div
          onClick={()=>( 
            enable ? 
            navigate(`${item.slug}`)
            : undefined
          )}
          key={index}
          className="related-blog-list-categorie rounded-2xl flex flex-col gap-2"
        >
          <img id="related-img" src={item.img} alt="girlPicture" />

          <strong className="text-sm line-clamp-2">
            {item.title}
          </strong>

          <div className="flex justify-between items-center">
            <div className="flex gap-1.5 items-center">
              <Box size={20} color="gray" />
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock size={16} color="gray" />
              <p className="text-xs text-gray-500">{item.duration}</p>
            </div>
          </div>

          <p id="related-content" className="line-clamp-3 text-xs">
            {item.content}
          </p>

          <div className="markiting-footer flex items-center justify-between">
            <div className="rape-related-img flex gap-2 items-center">
              <img
                src={item.authorImg}
                alt="girl-standing-picture"
                className="w-8 h-8 rounded-full object-cover object-top bg-gray-200"
              />
              <p className="text-xs font-medium">{item.author}</p>
            </div>

            <div className="flex gap-0.5 items-center">
              <DollarSign size={16} color="gray" />
              <p className="text-base font-serif tracking-tight">
                {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Articles;
