<%- include layouts/header.ejs %>



    <div class="container">
  	<!-- This code is taken from http://twitter.github.com/bootstrap/examples/hero.html -->
<div class="container provider_detail" itemscope="" itemtype="http://schema.org/LocalBusiness">
    <div class="row">
        <div class="span12">
            <h1>
	              <div class="logo pull-left">
	              	<img alt="" itemprop="photo" src="ClassSchedule_files/stringio.txt">
	              </div>
	           Sutton Swim School  
            </h1>

            <div class="muted">
		10455 Bandley Drive, Cupertino, CA 95014 • (408) 996-9800<br>
		Everything is about the kids.
            
            </div>

        </div> <!-- .span12 -->
    </div> <!-- .row -->

    <div class="row">
        

            <div class="subsection">
              <!-- Display discounts that are current or have expired a month ago -->

            </div>

          </div>

      <div class="span12">
          <ul class="nav nav-tabs" id="reviews_tab">
              <li class="active"><a href="#activities" data-toggle="tab">Offerings</a></li> 
          </ul>

          <div class="tab-content">

              <div id="activities" class="activities tab-pane active">
		<div style="display: none;" id="indicator1" class="ajax-progress-relative">
		</div>
                  <div id="activities_ajax">

<div class="search-filter" style="margin-top:10px;">

<form name=search accept-charset="UTF-8" action="/offerings/search" class="form-inline" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" value="✓" type="hidden"></div>

	<div>
		<label><strong>Filters: &nbsp;</strong></label>
			<label>
			<select class="input-small" name="category"><option selected="selected" value="">All Categories</option>
<option value="Swim">Swim</option>
<option value="Art">Art</option>
<option value="Karate">Karate</option>
</select>
		<label>
    <input class="input-small hasDatepicker" id="filter_start_date" name="filter[start_date]" onchange="reloadActivities()" placeholder="Start Date" size="30" type="text">
    <input class="input-small hasDatepicker" id="filter_end_date" name="filter[end_date]" onchange="reloadActivities()" placeholder="End Date" size="30" type="text">
	  <label class="checkbox"><input id="classes" name="classes" onclick="reloadActivities()" value="true" type="checkbox">Classes</label> 
	  <label class="checkbox"><input id="camps" name="camps" onclick="reloadActivities()" value="true" type="checkbox">Camps</label> 
         <input type="submit" class="btn btn btn-primary button-rounded" name="submit" value="Search"> 
  </label></div> 
</form></div> 



  </tbody>
</table>
</div>
              </div> <!-- #reviews.reviews -->
              <div id="reviews" class="reviews tab-pane ">
									<div style="display: none;" id="indicator2" class="ajax-progress-relative">
									</div>
                  <div id="reviews_ajax"><br>
<div class="endorsements">
	<div id="indicator" class="ajax-progress-relative">
	</div>
	
      <form accept-charset="UTF-8" action="/endorsements" class="attribute-form" id="new_endorsement" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" value="✓" type="hidden"><input name="authenticity_token" value="f4Do5zxcmhGp8QAeB3jSbgCfNm8BUMHP3/vDe2Vl+hc=" type="hidden"></div>
        <input id="endorsement_endorsement_attribute_id" name="endorsement[endorsement_attribute_id]" value="1" type="hidden">
        <input id="endorsement_provider_id" name="endorsement[provider_id]" value="2358" type="hidden">
        <input id="endorsement_provider_location_id" name="endorsement[provider_location_id]" value="2886" type="hidden">
				<div class="btn-group">
				  <button type="submit" onclick="submit_endorsement();" title="Do you like this?" class="btn btn-info "><i class="icon-heart"></i> Love It</button>
				</div>      
</form>      <form accept-charset="UTF-8" action="/endorsements" class="attribute-form" id="new_endorsement" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" value="✓" type="hidden"><input name="authenticity_token" value="f4Do5zxcmhGp8QAeB3jSbgCfNm8BUMHP3/vDe2Vl+hc=" type="hidden"></div>
        <input id="endorsement_endorsement_attribute_id" name="endorsement[endorsement_attribute_id]" value="2" type="hidden">
        <input id="endorsement_provider_id" name="endorsement[provider_id]" value="2358" type="hidden">
        <input id="endorsement_provider_location_id" name="endorsement[provider_location_id]" value="2886" type="hidden">
				<div class="btn-group">
				  <button type="submit" onclick="submit_endorsement();" title="Have you been here?" class="btn btn-info "><i class="icon-ok"></i> Been There</button>
				  	<button class="btn btn-info ">2</button>
				</div>      
</form>      <form accept-charset="UTF-8" action="/endorsements" class="attribute-form" id="new_endorsement" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" value="✓" type="hidden"><input name="authenticity_token" value="f4Do5zxcmhGp8QAeB3jSbgCfNm8BUMHP3/vDe2Vl+hc=" type="hidden"></div>
        <input id="endorsement_endorsement_attribute_id" name="endorsement[endorsement_attribute_id]" value="3" type="hidden">
        <input id="endorsement_provider_id" name="endorsement[provider_id]" value="2358" type="hidden">
        <input id="endorsement_provider_location_id" name="endorsement[provider_location_id]" value="2886" type="hidden">
				<div class="btn-group">
				  <button type="submit" onclick="submit_endorsement();" title="Do you want to bookmark this?" class="btn btn-info "><i class="icon-bookmark"></i> Bookmark</button>
				</div>      
</form></div>



<br>
<p>
 </p><form accept-charset="UTF-8" action="/provider_locations/2886-the-dance-affair-san-jose-ca/reviews" class="new_review" id="new_review" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" value="✓" type="hidden"><input name="authenticity_token" value="f4Do5zxcmhGp8QAeB3jSbgCfNm8BUMHP3/vDe2Vl+hc=" type="hidden"></div>



<input id="review_overall_rating" name="review[overall_rating]" type="hidden">

<h4>How likely are you to recommend <a href="http://www.powerup.com/biz/2886-the-dance-affair-san-jose-ca">Sutton Swim School </a> to a friend?</h4>

 <div id="rating-star-container">
   <span class="star-rating-control"><div class="rating-cancel"><a title="Cancel Rating"></a></div><div id="review_overall_rating_1" class="star-rating rater-0 star star-rating-applied star-rating-live"><a title="Never">1</a></div><div id="review_overall_rating_2" class="star-rating rater-0 star star-rating-applied star-rating-live"><a title="Maybe Not">2</a></div><div id="review_overall_rating_3" class="star-rating rater-0 star star-rating-applied star-rating-live"><a title="Maybe">3</a></div><div id="review_overall_rating_4" class="star-rating rater-0 star star-rating-applied star-rating-live"><a title="Very Likely">4</a></div><div id="review_overall_rating_5" class="star-rating rater-0 star star-rating-applied star-rating-live"><a title="Absolutely">5</a></div></span><input style="display: none;" class="star star-rating-applied" id="review_overall_rating_1" name="review[overall_rating]" title="Never" value="1" type="radio">
   <input style="display: none;" class="star star-rating-applied" id="review_overall_rating_2" name="review[overall_rating]" title="Maybe Not" value="2" type="radio">
   <input style="display: none;" class="star star-rating-applied" id="review_overall_rating_3" name="review[overall_rating]" title="Maybe" value="3" type="radio">
   <input style="display: none;" class="star star-rating-applied" id="review_overall_rating_4" name="review[overall_rating]" title="Very Likely" value="4" type="radio">
   <input style="display: none;" class="star star-rating-applied" id="review_overall_rating_5" name="review[overall_rating]" title="Absolutely" value="5" type="radio">
 </div>

<p>Your Comment</p>
<div id="rankingplace-post">
 <textarea class="span11" cols="40" id="review_review_text" name="review[review_text]" rows="20" style="height:100px;"></textarea>
</div> 
<div>
		<input class="btn btn-primary" id="review_submit" name="commit" value="Submit" type="submit">
</div> 

</form>

	
<p></p>
</div>
              </div> <!-- #reviews.reviews -->

          </div> <!-- .tab-content -->
      </div> <!-- .span12 -->
    </div>
</div> <!-- .container -->




<div id="giveaway_modal" class="modal hide" style="width:500px;">
  <button type="button" class="close" style="margin-right: 5px;margin-top: 5px;" data-dismiss="modal" aria-hidden="true">×</button>
  <div class="modal-body">
		<center><a href="http://www.powerup.com/registrations/new?activity_schedule_id=90671"><img src="ClassSchedule_files/win-100-seal.png" style="width:200px" align="top"></a>
  	<h2>
	  		    Get $100 off any activity*
    </h2>
		</center>
    <p>*One lucky winner can choose any activity listed on powerup's <a href="http://www.powerup.com/search?easy_enroll=true&amp;b=v1">EasyEnroll page</a>. Winner will get $100 discount on the activity fee. </p>
    <p>100's of activities to choose from: Art, Theatre, Writing, Sports, Science, Overnight, and more!</p>
		<center>
    <p><a href="http://www.powerup.com/registrations/new?activity_schedule_id=90671&amp;aht_src=AHProvider-popup-2358&amp;aht_cam=giveaway" class="btn btn-primary btn-large button-rounded input-large">ENTER TO WIN</a>
		<br><strong>Hurry, ends soon</strong>
 		</p>
		</center>
  </div>
</div>

<script type="text/javascript">
  $(document).ready(function() {
  });
</script>
    </div>
  	<footer>

    <div class="container">
            <div class="span3">
		    <a href="http://www.powerup.com/pages/about">
		    <h4>About Us</h4>
		    </a>
            </div>

            <div class="span3">
            	    <a href="http://www.powerup.com/contacts/contact_admin">
	            <h4>Contact Us</h4>
		    </a>
            </div>

        </div>
    </div> <!-- .container -->
</footer>



