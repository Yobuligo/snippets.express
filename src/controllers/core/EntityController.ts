import { IEntityRepository } from "../../repositories/core/IEntityRepository";
import { IEntity } from "../../shared/types/IEntity";
import { IEntityDetails } from "../../shared/types/IEntityDetails";
import { IRouteMeta } from "../../shared/types/IRouteMeta";
import { Controller } from "./Controller";
import { SessionInterceptor } from "./SessionInterceptor";

export abstract class EntityController<
  TEntity extends IEntity,
  TEntityRepository extends IEntityRepository<TEntity>
> extends Controller {
  constructor(
    protected routeMeta: IRouteMeta,
    protected repo: TEntityRepository
  ) {
    super();
    this.deleteById();
    this.insert();
    this.findAll();
    this.findById();
    this.update();
  }

  protected deleteById() {
    this.router.delete(
      `${this.routeMeta}/:id`,
      SessionInterceptor((req, res) => {
        const id = req.params.id;
        const success = this.repo.deleteById(id);
        if (!success) {
          res.status(404).end();
        } else {
          res.status(204).end();
        }
      })
    );
  }

  protected findAll() {
    this.router.get(
      this.routeMeta.path,
      SessionInterceptor(async (_, res) => {
        const entities = await this.repo.findAll();
        res.status(200).send(entities);
      })
    );
  }

  protected findById() {
    this.router.get(
      `${this.routeMeta.path}/:id`,
      SessionInterceptor(async (req, res) => {
        const id = req.params.id;
        const entity = await this.repo.findById(id);
        if (entity) {
          res.status(200).send(entity);
        } else {
          res.status(404).end();
        }
      })
    );
  }

  protected insert() {
    this.router.post(
      this.routeMeta.path,
      SessionInterceptor(async (req, res) => {
        const entity: IEntityDetails<TEntity> = req.body;
        const createdEntity = await this.repo.insert(entity);
        res.status(201).send(createdEntity);
      })
    );
  }

  protected update() {
    this.router.put(
      this.routeMeta.path,
      SessionInterceptor(async (req, res) => {
        const entity = req.body;
        const updatedEntity = await this.repo.update(entity);
        res.status(200).send(updatedEntity);
      })
    );
  }
}
