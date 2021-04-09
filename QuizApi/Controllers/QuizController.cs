using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuizApi.Models;

namespace QuizApi.Controllers
{
  public class QuizController : ApiController
  {
    [HttpGet]
    [Route("api/Questions")]

    public HttpResponseMessage GetQuestions()
    {
      using (DBModels db = new DBModels())
      {
        var Qns = db.Questions.Select(x => new { QnID = x.QnID, Qn = x.Qn, ImageName = x.ImageName, x.Option1, x.Option2, x.Option3, x.Option4 })
          .OrderBy(y => Guid.NewGuid()).Take(10).ToArray();
        var updated = Qns.AsEnumerable().Select(x => new
        {
          QnId = x.QnID,
          Qn = x.Qn,
          Imagename = x.ImageName,
          options = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 }
        }).ToList();

        return this.Request.CreateResponse(HttpStatusCode.OK, updated);
      }
    }

    [HttpPost]
    [Route("api/Answers")]

    public HttpResponseMessage GetAnswers(int[] QIds)
    {
      using (DBModels db = new DBModels())
      {
        var result = db.Questions
                   .AsEnumerable()
                   .Where(y => QIds.Contains(y.QnID))
                   .OrderBy(x => { return Array.IndexOf(QIds, x.QnID); })
                   .Select(z => z.Answer)
                   .ToArray();
        return this.Request.CreateResponse(HttpStatusCode.OK, result);
      }



    }

    [HttpPost]
    [Route("api/CrateQuestion")]
    public HttpResponseMessage CrateQuestion(Question question)
    {
      using (DBModels db = new DBModels())
      {
        var result = db.Questions.Add(question);
        db.SaveChanges();
                   
        return this.Request.CreateResponse(HttpStatusCode.OK, result);
      }

   
      
    }
  }
}

