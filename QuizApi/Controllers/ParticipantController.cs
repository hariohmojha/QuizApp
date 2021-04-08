using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuizApi.Models;

namespace QuizApi.Controllers
{
    public class ParticipantController : ApiController
    {
      [HttpPost]
      [Route("api/InsertParticipant")]
      public  Participant insert(Participant model)
    {
      using (DBModel db = new DBModel())
      {
        db.Participants.Add(model);
        db.SaveChanges();
        return model;
      }
    }
    [HttpPost]
    [Route("api/UpdateParticipant")]
    public void UpdateOutput(Participant model)
    {
      using (DBModel db = new DBModel())
      {
        db.Entry(model).State = System.Data.EntityState.Modified;
        db.SaveChanges();


      }

    }
  }
}
