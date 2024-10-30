import Category from "../model/Category.js";
import Cause from "../model/Cause.js";
import User from "../model/User.js";

class CauseController {
  async create(req, res, next) {
    try {
      const data = await Cause.create(req.body);
      if (data) {
        const updateUser = await User.findByIdAndUpdate(
          req.body.user_id,
          {
            $push: { cause: data._id },
          },
          { new: true }
        );

        const updatecategory = await Category.findByIdAndUpdate(
          req.body.category_id,
          {
            $push: { cause: data._id },
          },
          { new: true }
        );

        if (data && updateUser && updatecategory) {
          return res.status(201).json({
            success: true,
            data,
            messages: "Create successfuly",
          });
        }
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      const data = await Cause.find();
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async getDetail(req, res, next) {
    try {
      const data = await Cause.findById(req.params.id);
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const data = await Cause.findByIdAndDelete(req.params.id);
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "delete successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = await Cause.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body, updatedAt: new Date() },
        { new: true }
      );
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default new CauseController();
